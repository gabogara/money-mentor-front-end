import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
// import getRecent for quick summary view of last 5 transactions/current balance
import { getRecent } from '../../services/transactionService';

const Dashboard = () => {
    const { user } = useContext(UserContext)
    const [recentTransactions, setRecentTransactions] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const transData = await getRecent();
                setRecentTransactions(transData || []);
                // debugging () in each transaction
                console.log("RECENT DATA ARRIVED:", transData);
            } catch (err) {
                console.log(err)
            }
        }
        if (user) fetchDashboardData()
    }, [user])

    return (
        <main className='main-content-container'>
            <>
            <h1>Welcome, {user.username}!</h1>
            {/* monthly stats at a glance */}
            <section className='monthly-stats-section'>
                <div className='stats-header'>
                    <select className='month-dropdown'>
                        <option value="month">January 2026</option>
                        <option value="month">December 2025</option>
                    </select>
                </div>

            </section>
            {/* recent activity */}
            <section className='recent-activity-section'>
                <h2>Here are your recent money moves.</h2>
                <ul>
                    {recentTransactions.map((transaction) => {
                        const isIncome = transaction.categoryId?.type === 'Income';
                        const symbol = isIncome ? '+' : '-';

                        return (
                        <li key={transaction._id}>
                            {transaction.description}: {' '}
                            {symbol}{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(transaction.amount)} 
                        </li>
                    );
                })}
                </ul>
                <Link to ='/transactions'><button>View All Transactions</button></Link>
            </section>
            </>
        </main>
    );
};

export default Dashboard;
