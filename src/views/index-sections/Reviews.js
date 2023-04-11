import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import {
    Container
} from 'reactstrap'

const teamMembers = [
    {
        name: 'Thibzee',
        content: 'This is awesome I’m platinum 3 now and this service is just insane',
        date: 'Jan 20, 2021',
    },
    {
        name: 'Lucas Andersson',
        content: 'one of the best boosting services. Professional website, no trust issues and fast delivery. Can recommend!',
        date: 'Jan 6,2021',
    },
    {
        name: 'Thibzee',
        content: 'This is awesome I’m platinum 3 now and this service is just insane',
        date: 'Jan 20, 2021',
    },
    {
        name: 'Thibzee',
        content: 'This is awesome I’m platinum 3 now and this service is just insane',
        date: 'Jan 20, 2021',
    },
    {
        name: 'Thibzee',
        content: 'This is awesome I’m platinum 3 now and this service is just insane',
        date: 'Jan 20, 2021',
    },
  ]
function Reviews() {
    return (
        <div className="section section-review">
            <div className="header">
                <h4>Verified Reviews</h4>
                <p>Insecure? View our reviews from Trustpilot</p>
            </div>
            <Container fluid="xl">
                <div className="d-flex" style={{alignItems:"center"}}>
                    <button className="next-btn my-btn-round">&lt;</button>
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    style={{ overflow: 'hidden' }}
                    className="w-full mt-6"
                    loop
                    navigation={{
                        nextEl: '.prev-btn',
                        prevEl: '.next-btn',
                    }}
                    breakpoints={{
                        640: {
                        slidesPerView: 2,
                        },
                        1280: {
                        slidesPerView: 2,
                        },
                        1536: {
                        slidesPerView: 2,
                        },
                    }}
                    >
                    {teamMembers.map((member, j) => (
                        <SwiperSlide key={j}>
                        <div className="slider-item bg-gray p-3 shadow-lg my-4">
                            <div className="flex flex-col">
                            <div className="flex items-center justify-start">
                                <div className="flex flex-col items-start ml-3">
                                <h2 className="text-blue-900 text-2xl">
                                    {member.name}
                                    <span className="px-1">-</span>
                                    <span className="fa fa-star checked" style={{color: '#EBB434', position: 'relative', top: '-1px'}} aria-hidden="true"></span>
                                    <span className="fa fa-star checked" style={{color: '#EBB434', position: 'relative', top: '-1px'}} aria-hidden="true"></span>
                                    <span className="fa fa-star checked" style={{color: '#EBB434', position: 'relative', top: '-1px'}} aria-hidden="true"></span>
                                    <span className="fa fa-star checked" style={{color: '#EBB434', position: 'relative', top: '-1px'}} aria-hidden="true"></span>
                                    <span className="fa fa-star checked" style={{color: '#EBB434', position: 'relative', top: '-1px'}} aria-hidden="true"></span>
                                </h2>
                                <p className=" text-gray-400">{member.content}</p>
                                </div>
                            </div>
                            <div className="flex justify-start mt-3 date">
                                {member.date}
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>    
                    <button className="prev-btn my-btn-round">&gt;</button>
                </div>
            </Container>
            <div className='footer'>
                <span>View all our reviews on </span>
                <img src="./images/truepilot-nostar.svg" alt="truepilot" widht="105px" height="25px" style={{marginBottom:"8px"}} />
            </div>
        </div>
    )
}

export default Reviews;