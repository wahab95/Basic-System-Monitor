import { useEffect, useState, useContext } from 'react';
import Bar from '../../components/Bar/Bar.jsx';
import { LanguageContext } from '../../contexts/LanguageContext.jsx';
import './App.css';

function App() {
  const pc = window.pc;
  const { t } = useContext(LanguageContext);

  const [pcData, setPcData] = useState({});
  
  // static values such as CPU, GPU, IP address:
  const [cpuInfo, setCpuInfo] = useState(null);
  const [gpuInfo, setGpuInfo] = useState(null);
  const [ipAddress, setIpAddress] = useState('');
  const [ipAddressType, setIpAddressType] = useState('');
  const [ipAddressVersion, setIpAddressVersion] = useState('');
  const [ipAddressSubnet, setIpAddressSubnet] = useState('');
  const [ipAddressGateway, setIpAddressGateway] = useState('');
  const [ipAddressDns, setIpAddressDns] = useState('');
  const [ipAddressMac, setIpAddressMac] = useState('');

  //dynamic data such as cpu load, usage, memory:
  const [cpuUsagePercentage, setCpuUsagePercentage] = useState(0);
  
  useEffect(() => {
    // Fetch static data once
    const fetchStaticData = async () => {
      try {
        const [cpu, graphics, networkInterfaces] = await Promise.all([
          pc.cpu(),
          pc.graphics(),
          pc.networkInterfaces()
        ]);
        
        setCpuInfo(cpu);
        setGpuInfo(graphics);
        
        // Get default network interface
        const defaultInterface = networkInterfaces?.find(iface => iface.default) || networkInterfaces?.[0];
        if (defaultInterface) {
          setIpAddress(defaultInterface.ip4 || defaultInterface.ip6 || '');
          setIpAddressType(defaultInterface.type || '');
          setIpAddressVersion(defaultInterface.ip4 ? 'IPv4' : 'IPv6');
          setIpAddressSubnet(defaultInterface.ip4subnet || defaultInterface.ip6subnet || '');
          setIpAddressGateway(defaultInterface.gateway || '');
          setIpAddressDns(defaultInterface.dns || '');
          setIpAddressMac(defaultInterface.mac || '');
        }
      } catch (error) {
        console.error('Error fetching static data:', error);
      }
    };

    fetchStaticData();

    // Fetch dynamic data every second
    const interval = setInterval(async () => {
      try {
        const [memoryData, currentLoad] = await Promise.all([
          pc.mem(),
          pc.currentLoad(),
        ]);
        
        setPcData({
          mem: memoryData
        });

        // CPU data
        if (currentLoad) {
          const cpuUsage = currentLoad.currentLoad || 0;
          setCpuUsagePercentage(cpuUsage);
        }



        // GPU data is static, no dynamic updates needed
      } catch (error) {
        console.error('Error fetching dynamic data:', error);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [pc, gpuInfo]);

  //Simplification:-
  //Memory section:
  const freeMemory = pcData.mem?.free || 0;
  const totalMemory = pcData.mem?.total || 0;
  const usedMemory = totalMemory - freeMemory;
  const usedMemoryPercentage = totalMemory > 0 ? (usedMemory / totalMemory) * 100 : 0;

  // Format bytes to human readable
  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  //Network section:
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{t('main.title')}</h1>
      </div>

      <div className="dashboard-grid">
        {/* Memory Section */}
        <div className="card">
          <h2>{t('main.memory')}</h2>
          <div className="card-content">
            <div className="stat-row">
              <span className="stat-label">{t('main.total')}:</span>
              <span className="stat-value">{formatBytes(totalMemory)}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.used')}:</span>
              <span className="stat-value">{formatBytes(usedMemory)}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.free')}:</span>
              <span className="stat-value">{formatBytes(freeMemory)}</span>
            </div>
            <div className="usage-bar-container">
              <Bar usage={usedMemoryPercentage} />
              <div className="usage-percentage">{usedMemoryPercentage.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* CPU Section */}
        <div className="card">
          <h2>{t('main.cpu')}</h2>
          <div className="card-content">
            {cpuInfo && (
              <div className="stat-row">
                <span className="stat-label">{t('main.model')}:</span>
                <span className="stat-value">{cpuInfo.manufacturer} {cpuInfo.brand}</span>
              </div>
            )}
            <div className="stat-row">
              <span className="stat-label">{t('main.cores')}:</span>
              <span className="stat-value">{cpuInfo?.cores || 'N/A'}</span>
            </div>
            <div className="usage-bar-container">
              <Bar usage={cpuUsagePercentage} />
              <div className="usage-percentage">{cpuUsagePercentage.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* GPU Section */}
        <div className="card">
          <h2>{t('main.gpu')}</h2>
          <div className="card-content">
            {gpuInfo && gpuInfo.controllers && gpuInfo.controllers.length > 0 ? (
              <>
                <div className="stat-row">
                  <span className="stat-label">{t('main.model')}:</span>
                  <span className="stat-value">{gpuInfo.controllers[0].model || 'N/A'}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">{t('main.vendor')}:</span>
                  <span className="stat-value">{gpuInfo.controllers[0].vendor || 'N/A'}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">VRAM:</span>
                  <span className="stat-value">{gpuInfo.controllers[0].vram ? formatBytes(gpuInfo.controllers[0].vram * 1024 * 1024) : 'N/A'}</span>
                </div>
              </>
            ) : (
              <div className="stat-row">
                <span className="stat-value">{t('main.noGpuDetected')}</span>
              </div>
            )}
          </div>
        </div>


        {/* IP Address Section */}
        <div className="card card-wide">
          <h2>{t('main.networkInterface')}</h2>
          <div className="card-content">
            <div className="stat-row">
              <span className="stat-label">{t('main.ipAddress')}:</span>
              <span className="stat-value">{ipAddress || t('main.notAvailable')}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.type')}:</span>
              <span className="stat-value">{ipAddressType || 'N/A'}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.version')}:</span>
              <span className="stat-value">{ipAddressVersion || 'N/A'}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.subnet')}:</span>
              <span className="stat-value">{ipAddressSubnet || 'N/A'}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.gateway')}:</span>
              <span className="stat-value">{ipAddressGateway || 'N/A'}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.dns')}:</span>
              <span className="stat-value">{ipAddressDns || 'N/A'}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">{t('main.macAddress')}:</span>
              <span className="stat-value">{ipAddressMac || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
