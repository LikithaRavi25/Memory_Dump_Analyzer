import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaPhone }
from "react-icons/fa";
import axios from "axios";
import "../Dashboard.css";

function Dashboard() {

    const [file, setFile] = useState(null);

    const [result, setResult] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

        const [history, setHistory] =
useState([]);

const loadHistory =
async () => {

    try {

        const response =
            await axios.get(
                "http://localhost:5000/api/history"
            );

        setHistory(
            response.data.data
        );

    }

    catch (error) {

        console.error(error);

    }

};

    const analyzeMemory =
        async () => {

            try {

                setLoading(true);

                if (!file) {

                    alert(
                        "Please select a memory dump file"
                    );

                    setLoading(false);

                    return;

                }

                const formData =
                    new FormData();

                formData.append(
                    "memoryDump",
                    file
                );

                const uploadResponse =
                    await axios.post(
                        "http://localhost:5000/api/upload",
                        formData
                    );

                const fileName =
                    uploadResponse.data.filename;

                const analysisResponse =
                    await axios.get(
                        `http://localhost:5000/api/hidden/${fileName}`
                    );

                setResult(
                    analysisResponse.data
                );

                setLoading(false);

            }

            catch (error) {

                console.error(error);

                setLoading(false);

                alert(
                    "Analysis Failed"
                );

            }

        };

    return (

        <div className="container">

            <h1 className="title">
                Memory Dump Analyzer
            </h1>

            <div className="upload-card">

                <input
                    type="file"
                    onChange={(e) =>
                        setFile(
                            e.target.files[0]
                        )
                    }
                />

                <br />
                <br />

                <button
                    className="analyze-btn"
                    onClick={analyzeMemory}
                >

                    Analyze Memory

                </button>

                <button
                    className="history-btn"
                    onClick={loadHistory}
                >

                    View History

                </button>

            </div>

            

                {loading && (
<div className="loading-box">
    <div className="spinner"></div>
    <h3>Analyzing Memory Dump...</h3>
    <p>Please wait. Volatility is processing the memory image.</p>
</div>
)}

            {

                result && (

                    <div className="result-card">

                        <h2>
                            Analysis Result
                        </h2>

                        <div className="stats">

                            <div
                                className="stat-box"
                            >

                                <h2>
                                    {
                                        result.activeProcesses
                                    }
                                </h2>

                                <p>
                                    Active Processes
                                </p>

                            </div>

                            <div
                                className="stat-box"
                            >

                                <h2>
                                    {
                                        result.scannedProcesses
                                    }
                                </h2>

                                <p>
                                    Scanned Processes
                                </p>

                            </div>

                            <div
                                className="stat-box"
                            >

                                <h2
                                    className={
                                        result.riskScore > 20
                                            ? "risk-high"
                                            : "risk-low"
                                    }
                                >

                                    {
                                        result.riskScore
                                    }

                                </h2>

                                <p>
                                    Risk Score
                                </p>

                            </div>

                        </div>

                        <h2>
                            Suspicious Processes
                        </h2>

                        <div
                            className="process-list"
                        >

                            <ul>

                                {

                                    result.suspiciousProcesses.map(
                                        (
                                            process,
                                            index
                                        ) => (

                                            <li
                                                key={index}
                                            >

                                                {
                                                    process.name
                                                }

                                            </li>

                                        )
                                    )

                                }

                            </ul>

                        </div>

                        <h2>
                            Hidden Processes
                        </h2>

                        <div
                            className="process-list"
                        >

                            <ul>

                                {

                                    result.hiddenProcesses.map(
                                        (
                                            process,
                                            index
                                        ) => (

                                            <li
                                                key={index}
                                            >

                                                {
                                                    process.name
                                                }

                                                {" "}

                                                (
                                                PID:
                                                {
                                                    process.pid
                                                }
                                                )

                                            </li>

                                        )
                                    )

                                }

                            </ul>

                        </div>

                    </div>

                )

            }

            {
history.length > 0 && (

<div className="result-card">

<h2>
📜 Analysis History
</h2>

<table>

<thead>

<tr>

<th>
Filename
</th>

<th>
Risk Score
</th>

<th>
Date
</th>

</tr>

</thead>

<tbody>

{
history.map(
(item,index)=>

<tr key={index}>

<td>
{item.filename}
</td>

<td>
{item.riskScore}
</td>

<td>
{
new Date(
item.createdAt
).toLocaleString()
}
</td>

</tr>
)
}

</tbody>

</table>

</div>

)
}
<footer className="footer">

    <div className="footer-links">

        <a
            href="https://github.com/LikithaRavi25"
            target="_blank"
            rel="noreferrer"
        >
<FaGithub />
        
        </a>

        <a
            href="mailto:likitharavi25@gmail.com"
        >
<FaEnvelope /> 
    
        </a>

        <a
            href="tel:+91 87933 46321"
        >
            <FaPhone /> 
        
        </a>

    </div>

    <p>© 2026 Likitha R</p>

</footer>
        </div>

    );

}



export default Dashboard;