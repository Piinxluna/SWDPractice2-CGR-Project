import EditProfile from '@/app/profile/edit/page'
import { render, screen } from '@testing-library/react'

// Mock router
jest.mock('next/navigation', () => ({
  useRouter() {
    return { prefetch: null }
  },
}))

// Mock useSession
jest.mock('next-auth/react', () => ({
  useSession() {
    return { data: null, user: { name: 'tester' } }
  },
}))

const mockResponse = {}

describe('Edit profile layout', () => {
  beforeEach(() => {
    render(<EditProfile />)
  })

  it('should have title', () => {
    const title = screen.getByText('Edit Your Profile')
    expect(title).toBeInTheDocument
  })

  it('should have all buttons', () => {
    const doneButton = screen.getByText('Done')
    expect(doneButton.getElementsByTagName).toBe('button')

    const deleteAccButton = screen.getByText('Delete account')
    expect(deleteAccButton.getElementsByTagName).toBe('button')
  })
})
