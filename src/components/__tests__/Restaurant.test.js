import { render } from "@testing-library/react"
import Restaurants from "../restaurants/Restaurants"
import MOCK_RES_LIST from '../mocks/resMockCard.json';
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_RES_LIST);
        }
    })
})

it("Should render all integrated component",()=>{
    render(<BrowserRouter><Restaurants /></BrowserRouter>)
})