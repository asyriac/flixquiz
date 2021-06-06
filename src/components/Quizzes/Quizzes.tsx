
import './Quizzes.css'
import data from '../../data'

const Quizzes = () => {   

    return(
        <div className="card-list row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 pt-1">
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <img src={item.image} alt={item.genre}/>
                            <div className="card-content">
                                <h3>{item.genre}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Quizzes;