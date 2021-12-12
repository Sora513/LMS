import React from "react";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, LabelList } from 'recharts';

const data01 = [
    { name: 'フロントエンド', value: 250, category: 1 },
    { name: 'バックエンド', value: 300, category: 2 },
    { name: '機械学習', value: 20, category: 3 },
    { name: 'デザイン', value: 140, category: 4 },
    { name: 'その他', value: 30, category: 5 },
    { name: '電子工作', value: 100, category: 6 },
    { name: '低レイヤ', value: 40, category: 7 },
];
const data02 = [

    { name: 'Vue.js', value: 25, category: 1 },
    { name: 'React', value: 75, category: 1 },
    { name: 'Gatsby', value: 75, category: 1 },
    { name: 'Hexo', value: 75, category: 1 },


    { name: 'NodeJS', value: 70, category: 2 },
    { name: 'Go', value: 60, category: 2 },
    { name: 'CentOS8', value: 60, category: 2 },
    { name: 'nginx', value: 50, category: 2 },
    { name: 'firebase', value: 20, category: 2 },
    { name: 'PostgreSQL', value: 20, category: 2 },
    { name: 'Netlify', value: 20, category: 2 },

    { name: 'Python', value: 20, category: 3 },

    { name: 'Illustrator', value: 40, category: 4 },
    { name: 'AfterEffects', value: 50, category: 4 },
    { name: 'CSS', value: 50, category: 4 },

    { name: 'Mathematica', value: 30, category: 5 },

    { name: 'Arduino', value: 60, category: 6 },
    { name: 'アナログ回路', value: 40, category: 6 },

    { name: 'インタプリタ', value: 40, category: 7 },
];
const COLORS = ['#f62e36', '#ff9500', '#d7c447', '#6cbb5a',"#00a0de", "#009bbf",  "#8f76d6"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const Angle = x > cx ? - midAngle : 180 - midAngle
    return (
        <text x={x} y={y} transform={"rotate(" + Angle + "," + x + "," + y + ")"} fill="white" textAnchor={x > cx ? 'middle' : 'middle'} dominantBaseline="central" font-size={outerRadius/5 * 90/(innerRadius+150)}>
            {payload.name}
        </text>
    );
};

const StatusGraph = () => {
    return (
        
        <ResponsiveContainer  height={600} className="statusgraph">
            <PieChart width="100%" height="100%">
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius="50%" fill="#8884d8" labelLine={false} label={renderCustomizedLabel}>
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.category - 1]} />
                    ))}
                </Pie>
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius="55%" outerRadius="95%" position="insideStart" fill="#82ca9d" labelLine={false} label={renderCustomizedLabel}>
                    {data02.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.category - 1]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default StatusGraph