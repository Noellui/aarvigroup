import React, { useEffect, useRef } from 'react';
import '../styles/MarketTicker.css';

const MarketTicker = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.type = 'text/javascript';
        script.textContent = JSON.stringify({
            symbols: [
                { proName: 'FOREXCOM:NSXUSD', title: 'NASDAQ' },
                { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },   // ← replaces NIFTY 50
                { proName: 'FOREXCOM:UKXGBP', title: 'FTSE' },
                { proName: 'INDEX:NKY', title: 'Nikkei' },
                { proName: 'CAPITALCOM:DXY', title: 'USD Index' },
                { proName: 'TVC:GOLD', title: 'Gold' },
                { proName: 'TVC:USOIL', title: 'Crude Oil' },
                { proName: 'FX:EURUSD', title: 'EUR/USD' },
                { proName: 'FX:USDINR', title: 'USD/INR' },
                { proName: 'BSE:SENSEX', title: 'SENSEX' },
            ],
            showSymbolLogo: false,
            isTransparent: true,
            displayMode: 'adaptive',
            colorTheme: 'dark',
            locale: 'en',
        });

        container.appendChild(script);

        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return (
        <div className="market-ticker-wrapper">
            <div className="tradingview-widget-container" ref={containerRef} />
        </div>
    );
};

export default MarketTicker;