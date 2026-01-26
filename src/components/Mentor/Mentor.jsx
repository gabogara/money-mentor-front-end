// import { Link } from "react-router-dom";

// const Mentor = ({ mentors }) => {
//   console.log(mentors);
//   if (!mentors) return <h1>Loading</h1>;
//   return (
//     <>
//       <h1>Level: {mentors.level} </h1>
//       <p>Name: {mentors.levelName}</p>
//       <p>Points: {mentors.points}</p>
//       <p>Mentor Says: {mentors.mentorMessage}</p>
//       {mentors.recentTransactions ? (
//         <div>
//           <p>Recent Transactions:</p>
//           {mentors?.recentTransactions.map((t) => {
            
//             return (
//               <div key={t._id}>
//                 <p>{t.amount}</p>
            
//                 <p>{t.description}</p>
//                 <p>Type: {t.type}</p>
//                  <p>Created: {t.date.slice(0, 10)}</p>
//                 <p>Updated: {t.updatedAt.slice(0, 10)}</p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p>No Transactions</p>
//       )}
//     </>
//   );
// };

// export default Mentor;
import { Link } from "react-router-dom";

const Mentor = ({ mentors }) => {
  if (!mentors) return <h1>Loading</h1>;

  return (
    <main className="mentor-container">
      {/* Header */}
      <div className="mentor-header">
        <h1 className="mentor-level">Level {mentors.level}</h1>
        <p className="mentor-level-name">{mentors.levelName}</p>
        <p className="mentor-points">Points: {mentors.points}</p>
      </div>

      {/* Mentor message */}
      <div className="mentor-message">
        <p>{mentors.mentorMessage}</p>
      </div>

      {/* Transactions */}
      <section className="mentor-transactions">
        <h2 className="mentor-transactions-title">Recent Transactions</h2>

        {mentors.recentTransactions && mentors.recentTransactions.length > 0 ? (
          mentors.recentTransactions.map((t) => (
            <div key={t._id} className="mentor-transaction-card">
              <div className="mentor-transaction-main">
                <span className="mentor-amount">${t.amount}</span>
                <span className="mentor-type">{t.type}</span>
              </div>

              <div className="mentor-transaction-meta">
                <span className="mentor-desc">Category: {t.description}</span>
                <span>Created at: {t.date.slice(0, 10)}</span>
                <span>Updated at: {t.updatedAt.slice(0, 10)}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="mentor-no-transactions">No Transactions</p>
        )}
      </section>

      <Link to="/">
        <button type="button">Return to Dashboard</button>
      </Link>
    </main>
  );
};

export default Mentor;
