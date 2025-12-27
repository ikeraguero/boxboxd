import { Navbar } from "@/components/Navbar"
import { render, screen } from "@testing-library/react"
import { describe, beforeAll, it, expect } from "vitest"
describe('Navbar', () => {
    beforeAll(() => {
        render(<Navbar />)
    })
    it('should render all navigation buttons', () => {
        const signInButton = screen.getByRole('link', {
            name: /sign in/i
        })

        expect(signInButton).toBeInTheDocument();

        const createAccountButton = screen.getByRole('link', {
            name: /create account/i
        })

        expect(createAccountButton).toBeInTheDocument();

        const racesButton = screen.getByRole('link', {
            name: /lists/i
        })

        expect(racesButton).toBeInTheDocument();

        const membersButton = screen.getByRole('link', {
            name: /members/i
        })

        expect(membersButton).toBeInTheDocument();

        const achievementsButton = screen.getByRole('link', {
            name: /achievements/i
        })

        expect(achievementsButton).toBeInTheDocument();
    })

    it('should render search input', () => {
        const searchInput = screen.getByTestId("search-input-group");

        expect(searchInput).toBeInTheDocument();
    })
})