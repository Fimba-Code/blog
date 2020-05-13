import styled from "styled-components"

export const Container = styled.div``

export const PostTitle = styled.h4`
  font-family: Poppins;
  font-size: 24px;
  margin-bottom: 15px;
  color: #303030;
`

export const Divider = styled.hr`
  background-color: #adb5bd;
`

export const Tags = styled.span`
  background-color: #303030;
  color: #fff;
  font-size: 8px;
  padding: 5px;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;
`
export const Date = styled.span`
  color: #212529;
  font-size: 12px;
`

export const PostsNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-left: 0;
  li > a {
    color: #303030;
    text-decoration: none;
    font-weight: bold;
    font-family: Poppins;
  }
`
