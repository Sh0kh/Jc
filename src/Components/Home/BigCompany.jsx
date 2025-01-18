import CompanyCard from "../others/CompanyCard";

import '../../Style/BigCompany.css'
export default function BigCompany() {
    return (
        <section className="big_company">
            <div className="Container">
                <div className="company_wrapper">
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/call.png" h4="We process the application" p="You can contact us by phone or email" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/calculator.png" h4="We make an offer" p="We calculate the cost in advance" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/call.png" h4="We make an offer" p="You can contact us by phone or email" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/kaska.png" h4="Departure to the customer" p="Our engineer arrives within 24 hours" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/list.png" h4="Calculation correction" p="We finally determine the cost of the project and the terms of work" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/hands.png" h4="We conclude an agreement" p="We sign a contract for the performance of work" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/start-rabot.png" h4="Start of work" p="We start drilling work immediately after payment" />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/like-hand.png" h4="Acceptance of works" p="Upon completion of the project" />
                </div>
            </div>
        </section>
    )
}