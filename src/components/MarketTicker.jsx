import React, { useEffect, useRef } from 'react';
import '../styles/MarketTicker.css';

const MarketTicker = () => {
    const containerRef = useRef(null);
    const blockerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const blocker = blockerRef.current;
        if (!container || !blocker) return;

        container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.type = 'text/javascript';
        script.textContent = JSON.stringify({
            symbols: [
                { proName: 'BSE:SENSEX', title: 'SENSEX' },
                { proName: 'FOREXCOM:NSXUSD', title: 'NASDAQ' },
                { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
                { proName: 'FOREXCOM:UKXGBP', title: 'FTSE' },
                { proName: 'INDEX:NKY', title: 'Nikkei' },
                { proName: 'CAPITALCOM:DXY', title: 'USD Index' },
                { proName: 'TVC:GOLD', title: 'Gold' },
                { proName: 'TVC:USOIL', title: 'Crude Oil' },
                { proName: 'FX:EURUSD', title: 'EUR/USD' },
                { proName: 'FX:USDINR', title: 'USD/INR' },
            ],
            showSymbolLogo: false,
            isTransparent: true,
            displayMode: 'adaptive',
            colorTheme: 'dark',
            locale: 'en',
        });
        container.appendChild(script);

        let reEnableTimer = null;
        const disableBlocker = () => {
            blocker.style.pointerEvents = 'none';
            clearTimeout(reEnableTimer);
            reEnableTimer = setTimeout(() => {
                blocker.style.pointerEvents = 'all';
            }, 400);
        };

        blocker.addEventListener('wheel', disableBlocker);
        blocker.addEventListener('touchstart', disableBlocker);

        return () => {
            blocker.removeEventListener('wheel', disableBlocker);
            blocker.removeEventListener('touchstart', disableBlocker);
            clearTimeout(reEnableTimer);
            if (container) container.innerHTML = '';
        };
    }, []);

    return (
        <div className="market-ticker-wrapper">
            <div className="tradingview-widget-container" ref={containerRef} />
            <div className="ticker-click-blocker" ref={blockerRef} />
        </div>
    );
};

export default MarketTicker;