const tickers = [
  { name: "NIFTY 50", value: "22,147.90", change: "+1.24%" },
  { name: "BANK NIFTY", value: "47,832.15", change: "+0.87%" },
  { name: "SENSEX", value: "73,158.24", change: "+1.12%" },
  { name: "PYTHON", value: "∞", change: "+100%" },
  { name: "ALGO TRADING", value: "ACTIVE", change: "LIVE" },
  { name: "BACKTESTS", value: "20+", change: "COMPLETE" },
  { name: "STRATEGIES", value: "OPTIMIZED", change: "PROFITABLE" },
  { name: "UPTIME", value: "99.9%", change: "STABLE" },
];

const TickerBar = () => {
  return (
    <div className="w-full bg-card/80 border-y border-border overflow-hidden py-2.5">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...tickers, ...tickers].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-6 font-mono text-xs">
            <span className="text-muted-foreground">{t.name}</span>
            <span className="text-foreground font-medium">{t.value}</span>
            <span className="text-primary">{t.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
