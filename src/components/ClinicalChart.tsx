import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useLanguage } from '../LanguageContext';

const data = [
  { day: 0, age: 45.0, control: 45.0 },
  { day: 30, age: 44.5, control: 45.1 },
  { day: 60, age: 43.8, control: 45.3 },
  { day: 90, age: 42.5, control: 45.4 },
  { day: 120, age: 41.92, control: 45.6 },
];

export const ClinicalChart = () => {
  const { t } = useLanguage();
  const isChinese = t.nav.home === '首页';

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <div className="mb-8">
        <h4 className="font-serif text-xl text-on-surface mb-2">
          {isChinese ? '生物学年龄逆转趋势' : 'Biological Age Reversal Trend'}
        </h4>
        <p className="font-sans text-[10px] uppercase tracking-widest text-primary font-bold">
          {isChinese ? 'TALENTs 临床研究数据' : 'TALENTs Clinical Study Data'}
        </p>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'rgba(0,0,0,0.4)' }}
              label={{ value: isChinese ? '天数' : 'Days', position: 'insideBottomRight', offset: -5, fontSize: 10 }}
            />
            <YAxis 
              domain={[40, 47]} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'rgba(0,0,0,0.4)' }}
              label={{ value: isChinese ? '生物年龄' : 'Bio-Age', angle: -90, position: 'insideLeft', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--color-surface)', 
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '0px',
                fontSize: '12px',
                fontFamily: 'sans-serif'
              }}
              itemStyle={{ color: 'var(--color-primary)' }}
            />
            <Area 
              type="monotone" 
              dataKey="age" 
              stroke="var(--color-primary)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorAge)" 
              name={isChinese ? '干预组' : 'Intervention'}
              animationDuration={2000}
            />
            <Line 
              type="monotone" 
              dataKey="control" 
              stroke="rgba(0,0,0,0.2)" 
              strokeWidth={1}
              strokeDasharray="5 5"
              dot={false}
              name={isChinese ? '对照组' : 'Control'}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 flex justify-between items-center text-[10px] font-sans uppercase tracking-widest text-on-surface-variant opacity-60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-primary"></div>
          <span>{isChinese ? '核苷酸干预' : 'Nucleotide Intervention'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-px border-t border-dashed border-on-surface/40"></div>
          <span>{isChinese ? '自然老化' : 'Natural Aging'}</span>
        </div>
      </div>
    </div>
  );
};
