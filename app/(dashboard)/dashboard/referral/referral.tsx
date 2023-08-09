"use client"
import HeadingCard from '@/app/components/heading-card'
import { CopyIcon } from '@/app/components/svg-icons'
import { Container, CopyContainer, StatsContainer } from '@/app/styles/dashboard.style'
import { Left, MRow, MTable, Right, TBody, THead, TRow, Table, Top, UserImage, Wrapper } from '@/app/styles/referral.style'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <Container>
      <HeadingCard heading={"Referral"} />
      <Wrapper>
        <Left>
            <Top>
                <h2>Referrals</h2>
                <select>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                </select>
            </Top>
            <Table>
                <THead>
                    <p>Referral</p>
                    <p>Level</p>
                    <p>Earnings</p>
                </THead>
                <TBody>
                    <TRow>
                        <p>
                            <UserImage>
                                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
                            </UserImage>
                            <span>Gemma Sandra</span>
                        </p>
                        <p>Level 1</p>
                        <p>500 BMT</p>
                    </TRow>
                    <TRow>
                        <p>
                            <UserImage>
                                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
                            </UserImage>
                            <span>Gemma Sandra</span>
                        </p>
                        <p>Level 1</p>
                        <p>500 BMT</p>
                    </TRow>
                    <TRow>
                        <p>
                            <UserImage>
                                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
                            </UserImage>
                            <span>Gemma Sandra</span>
                        </p>
                        <p>Level 1</p>
                        <p>500 BMT</p>
                    </TRow>
                    <TRow>
                        <p>
                            <UserImage>
                                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
                            </UserImage>
                            <span>Gemma Sandra</span>
                        </p>
                        <p>Level 1</p>
                        <p>500 BMT</p>
                    </TRow>
                    <TRow>
                        <p>
                            <UserImage>
                                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
                            </UserImage>
                            <span>Gemma Sandra</span>
                        </p>
                        <p>Level 1</p>
                        <p>500 BMT</p>
                    </TRow>
                    <TRow>
                        <p>
                            <UserImage>
                                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
                            </UserImage>
                            <span>Gemma Sandra</span>
                        </p>
                        <p>Level 1</p>
                        <p>500 BMT</p>
                    </TRow>
                </TBody>
            </Table>
            <MTable>
              <MRow>
                  <div>
                      <p>Gemma Sandra</p>
                      <p>Level 1</p>
                  </div>
                  <p>500 BMT</p>
              </MRow>
              <MRow>
                  <div>
                      <p>Gemma Sandra</p>
                      <p>Level 1</p>
                  </div>
                  <p>500 BMT</p>
              </MRow>
              <MRow>
                  <div>
                      <p>Gemma Sandra</p>
                      <p>Level 1</p>
                  </div>
                  <p>500 BMT</p>
              </MRow>
              <MRow>
                  <div>
                      <p>Gemma Sandra</p>
                      <p>Level 1</p>
                  </div>
                  <p>500 BMT</p>
              </MRow>
              <MRow>
                  <div>
                      <p>Gemma Sandra</p>
                      <p>Level 1</p>
                  </div>
                  <p>500 BMT</p>
              </MRow>
            </MTable>
        </Left>
        <Right>
          <CopyContainer>
            <p className='label'>Share your referral link</p>
            <div>
              <p>https://BMDAO.io/r/Bab28ndm</p>
              <button>
                  <CopyIcon />
                  <span>Copy</span>
              </button>
            </div>
          </CopyContainer>
          <h2>Referrals</h2>
          <StatsContainer>
            <div>
              <p>Referral Level</p>
              <p>Level 3</p>
            </div>
            <div>
              <p>Direct Referral</p>
              <p>32</p>
            </div>
            <div>
              <p>Indirect Referral</p>
              <p>32</p>
            </div>
            <div>
              <p>Total Earnings</p>
              <p>$75 (380 BMT)</p>
            </div>
          </StatsContainer>
          <h2>How Referral works</h2>
          <p>Each level of the referral program will offer different reward percentages for referral earnings. When a new member signs up using the referral link or code, they will be associated with the referring member and placed in the corresponding level of hte referral program.</p>
          <ul>
            <li>Level 1: Earning 12% of earnings generated by direct referrals.</li>
            <li>Level 1: Earning 12% of earnings generated by direct referrals.</li>
          </ul>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Dashboard;