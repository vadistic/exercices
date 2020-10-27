// https://leetcode.com/problems/validate-ip-address/

const IPV4 = 'IPv4'
const IPV6 = 'IPv6'
const NEITHER = 'Neither'

const NUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const HEX = [
  ...NUMBER,
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

/**
 *
 * @param {string} s
 */
const isV4segment = (s) => {
  // invalid length
  if (s.length > 3 || s.length < 1) return false
  // leading zero
  if (s.length > 1 && s[0] === '0') return false
  // valid characters
  if (s.split('').some((char) => NUMBER.indexOf(char) === -1)) return false
  // valid range
  if (+s > 255) return false

  return true
}

/**
 *
 * @param {string} ip
 */
const isV4 = (ip) => {
  const segments = ip.split('.')

  if (segments.length !== 4) return false

  return segments.every(isV4segment)
}

/**
 *
 * @param {string} s
 */
const isV6segment = (s) => {
  // invalid length
  if (s.length > 4 || s.length < 1) return false
  // valid characters
  if (s.split('').some((char) => HEX.indexOf(char) === -1)) return false

  return true
}

/**
 *
 * @param {string} ip
 */
const isV6 = (ip) => {
  const segments = ip.split(':')

  if (segments.length !== 8) return false

  return segments.every(isV6segment)
}

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  if (isV4(IP)) return IPV4
  if (isV6(IP)) return IPV6

  return NEITHER
}

export default validIPAddress
