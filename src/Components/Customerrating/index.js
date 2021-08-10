import "./style.css";
import rated_user_profile from "./user.jpg"

const Customerrating = ({costomerData}) => {
    return (
        <div className="customers_rating">

            <div className="rating_header">
                <div className="rated_user_profile">
                    <img src={rated_user_profile} alt="user" className="rated_user_image"/>

                </div>
                <div className="rated_short_details">
                        <div className="rated_info">
                            <div className="rated_username">{costomerData.name}</div>
                            <div className="user_ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                <div className="rated_time">Reviewed in India on {costomerData.time}</div>
                </div>
            </div>

            <div className="rating_description">
            Strongly don't buy. Overheating issue persis
                t and drain battery fast. cameras are average
                like 12000/ series phone.rated_user
            </div>


{/* akash */}
        </div>
    )
}

export default Customerrating