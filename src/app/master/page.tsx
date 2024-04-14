import React from "react";

const MasterPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 justify-between">
        <div className="stats shadow">
          <div className="stat shadow">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">13.2K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-title">Transaction This Month</div>
            <div className="stat-value text-green-400">3.6M</div>
            <div className="stat-desc">13% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-title">Current Active Users</div>
            <div className="stat-value text-secondary">5K</div>
            <div className="stat-desc">11% more than yesterday</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPage;
