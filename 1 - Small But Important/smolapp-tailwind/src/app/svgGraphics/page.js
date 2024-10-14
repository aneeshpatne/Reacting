'use client';
import { useState, useEffect } from 'react';
import styles from './graphics.module.css';
export default function Page() {
    const radius = 137.5; // Radius of the inner circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const [values, setValues] = useState({
        val1: 22,
        val2: 291,
        val3: 184
    });
    const [Mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const total = values.val1 + values.val2 + values.val3 ;

    const [normalizedValues, setNormalizedValues] = useState({
        val1: 0,
        val2: 0,
        val3: 0
    });

    useEffect(() => {
        const total = values.val1 + values.val2 + values.val3;
        setNormalizedValues({
            val1: (values.val1 *2/ total) * circumference,
            val2: (values.val2 / total) * circumference,
            val3: (values.val3 / total) * circumference
        });
    }, [values, circumference]);
    const offset1 = 0;
    const offset2 = normalizedValues.val1;
    const offset3 = normalizedValues.val1 + normalizedValues.val2;
    if (!Mounted){
        return "waiting";
    }

    return (
        <div id={styles.container}>
            <svg width="312" height="312" viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <path fillRule="evenodd" clipRule="evenodd" d="M156 312C242.156 312 312 242.156 312 156C312 69.8436 242.156 0 156 0C69.8436 0 0 69.8436 0 156C0 242.156 69.8436 312 156 312ZM156 274C221.17 274 274 221.17 274 156C274 90.8304 221.17 38 156 38C90.8304 38 38 90.8304 38 156C38 221.17 90.8304 274 156 274Z" fill="#D9D9D9" />
                <circle cx="156" cy="156" r="137.5" stroke="#f44336"
                    strokeWidth={35}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset1}
                   strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                <p>{total}</p>
                <circle cx="156" cy="156" r="137.5" stroke="#ff9800"
                    strokeWidth={35}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset2}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                <circle cx="156" cy="156" r="137.5" stroke="#4caf50"
                    strokeWidth={35}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset3}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                 <text x="156" y="156" textAnchor="middle" dominantBaseline="middle" fontSize="24" fill="#333" fontWeight="bold">
                    Total Solved:
                    {total}
                </text>
            </svg>
            dsds
        </div>
    );
}