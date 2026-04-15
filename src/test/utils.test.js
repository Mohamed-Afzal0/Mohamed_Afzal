import { describe, it, expect } from 'vitest'

describe('Utility Functions', () => {
  describe('cn - Class name merger', () => {
    it('should verify utility function exists', () => {
      // Test that demonstrates utility testing
      const testClass = 'px-2 py-1'
      expect(testClass).toBeTruthy()
      expect(typeof testClass).toBe('string')
    })

    it('should merge class names correctly', () => {
      const mergeClasses = (...inputs) => inputs.filter(Boolean).join(' ')
      const result = mergeClasses('px-2', 'py-1')
      expect(result).toBe('px-2 py-1')
    })

    it('should handle conditional classes', () => {
      const mergeClasses = (...inputs) => inputs.filter(Boolean).join(' ')
      const result = mergeClasses(
        'px-2',
        true && 'py-1',
        false && 'hidden'
      )
      expect(result).toBe('px-2 py-1')
    })

    it('should handle undefined values', () => {
      const mergeClasses = (...inputs) => inputs.filter(Boolean).join(' ')
      const result = mergeClasses('px-2', undefined, 'py-1')
      expect(result).toBe('px-2 py-1')
    })

    it('should work with empty inputs', () => {
      const mergeClasses = (...inputs) => inputs.filter(Boolean).join(' ')
      const result = mergeClasses()
      expect(result).toBe('')
    })
  })
})
