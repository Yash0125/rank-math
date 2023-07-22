import React, { useState } from "react";
import "./bitcoinStat.css";
import {
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BitcoinStat = () => {
  const [selectedTimeline, setSelectedTimeline] = useState("Day");
  const lineChartData = [
    {
      pv: 180,
      amt: 400,
    },
    {
      pv: 200,
      amt: 220,
    },
    {
      pv: 220,
      amt: 290,
    },
    {
      pv: 200,
      amt: 200,
    },
    {
      pv: 250,
      amt: 211,
    },
    {
      pv: 380,
      amt: 211,
    },
  ];

  const handleTimelineChange = (timeline) => {
    setSelectedTimeline(timeline);
  };

  return (
    <section className="bitcoin-stat">
      <div className="timeline">
        <ul>
          <li
            className={selectedTimeline === "Day" ? "selected" : ""}
            onClick={() => handleTimelineChange("Day")}
          >
            Day
          </li>
          <li
            className={selectedTimeline === "Week" ? "selected" : ""}
            onClick={() => handleTimelineChange("Week")}
          >
            Week
          </li>
          <li
            className={selectedTimeline === "Month" ? "selected" : ""}
            onClick={() => handleTimelineChange("Month")}
          >
            Month
          </li>
          <li
            className={selectedTimeline === "Year" ? "selected" : ""}
            onClick={() => handleTimelineChange("Year")}
          >
            Year
          </li>
        </ul>
      </div>
      <div className="stat">
        <div className="sub-stat">
          <div className="dot red-dot" />
          <span className="lower-text">Lower: $4.895</span>
          <span className="higher-text">Higher: $6.857</span>
          <div className="dot green-dot" />
        </div>
        <ResponsiveContainer width="100%" height={212}>
          <LineChart width="100%" height={250} data={lineChartData}>
            <XAxis
              style={{ fontSize: "14px" }}
              interval={"preserveStartEnd"}
              axisLine={false}
              tickLine={false}
              stroke="#858585"
              dataKey="name"
            />
            <CartesianGrid stroke="#f5f5f5" />
            {lineChartData.map((item, i) => (
              <ReferenceLine
                y={i * 200}
                key={i}
                strokeWidth={1}
                stroke="#EAEAEA"
              />
            ))}
            <Line
              type="monotone"
              dot={false}
              dataKey="pv"
              strokeWidth={3}
              stroke="#FFD700" 
              fill='url("#f99d21")'
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="bitcoinstat-price">
          <div className="dot yellow-dot" />
          <span>1 BTC=$5.483</span>
        </div>
      </div>
    </section>
  );
};

export default BitcoinStat;
