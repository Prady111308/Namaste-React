import { render , screen} from "@testing-library/react"
import MOCK_DATA from '../mocks/resMockCard.json'
import RestaurantCard from "../restaurants/RestaurantsCard"
import { PromotedComponentCard } from "../restaurants/RestaurantsCard"
import "@testing-library/jest-dom"

test("should render Restaurant card with prop",()=>{
    render(<RestaurantCard ResInfo={MOCK_DATA}/>)

    // const name = screen.getByText("GetAWay-Ice Creams & Desserts");
    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})

// it("should render Restaurant card with promoted lebel",()=>{
//     render(<PromotedComponentCard ResInfo={MOCK_DATA}/>)

//       const {component} = render(<RestaurantCard ResInfo={MOCK_DATA} />)
//       expect(component).toMatchSnapShot();
//     // const rating = screen.getByText("Pizza Hut")

//     // expect(rating).toBeInTheDocument();
// })