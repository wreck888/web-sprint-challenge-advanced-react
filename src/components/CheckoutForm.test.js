import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});


test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
  
    
    const firstInput = screen.getByLabelText(/first name:/i);
        userEvent.type(firstInput, "Ash")
        // console.log(firstInput)

    const lastInput = screen.getByLabelText(/last Name:/i);
        userEvent.type(lastInput, "Ketchum")

    const addressInput = screen.getByLabelText(/address:/i);
        userEvent.type(addressInput, "1 Master St")

    const cityInput = screen.getByLabelText(/city:/i);
        userEvent.type(cityInput, "Pallet")

    const stateInput= screen.getByLabelText(/state:/i);
        userEvent.type(stateInput,"Kanto")

    const zipInput = screen.getByLabelText(/zip:/i);
        userEvent.type(zipInput, "151")

    const button = screen.getByRole("button")
        userEvent.click(button)

    waitFor(async ()=> {
        const successDisplay = screen.queryByTestId("successMessage");
    
        const success= screen.queryByText(/You have ordered some plants/i);
        const firstname = screen.queryByText(/ash/i);
        const lastname = screen.queryByText(/ketchum/i);
        const city = screen.queryByText(/Pallet/i);
        const state = screen.queryByText(/kanto/i);
        const zip = screen.queryByText(/151/i);
        const address = screen.queryByText(/1 master st/i);
        

        expect(successDisplay).toBeInTheDocument();
        expect(success).toBeInTheDocument();
        expect(firstname).toBeInTheDocument();
        expect(lastname).toBeInTheDocument();
        expect(city).toBeInTheDocument();
        expect(state).toBeInTheDocument();
        expect(zip).toBeInTheDocument();
        expect(address).toBeInTheDocument();
    
        });

});
