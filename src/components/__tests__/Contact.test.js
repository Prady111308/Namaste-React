import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//grouping test cases

describe("Contact Us test cases",()=>{
    
    test("Should load Contact Us component" ,()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument()
    })
    //we can also test as it or test both are same thing
    it("Contact Us for input name" ,()=>{
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Your Name");
    
        //Assertion
        expect(inputName).toBeInTheDocument()
    })
    
    test("Number of input boxex loaded",()=>{
        render(<Contact />)
    
        const input = screen.getAllByRole("textbox");
        // console.log(input)
    
        //Assertion
        expect(input.length).toBe(3);
    })
})

