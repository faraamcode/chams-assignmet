import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { MdLocationPin } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaSearchLocation, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
    const data: IFooterArticle[] = [
        {
            title: "Wonder Sprout Academy",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque amet culpa eaque. Omnis excepturi rerum perferendis vero sunt nam.",
            icons: [
                {
                    icon: FaFacebook,
                    url: "https://www.twitter1.com"
                },
                {
                    icon: FaLinkedin,
                    url: "https://www.twitter2.com"
                },
                {
                    icon: FaInstagram,
                    url: "https://www.twitter3.com"
                },
                {
                    icon: FaTwitter,
                    url: "https://www.twitter4.com"
                },
            ]
        },
        {
            title: "Admission",
            links: [
                {
                    text: "creche",
                    url: "/"
                },
                {
                    text: "nursery and primary",
                    url: "/"
                },
                {
                    text: "college",
                    url: "/"
                }
            ],
        },
        {
            title: "Coutact us",
            discription: "Address:42 gaa akanbi, Ilorin, kwara state, Nigeria.",
            icons: [
                {
                    icon: MdLocationPin,
                    url: "https://www.twitter7.com"
                },
                {
                    icon: FaEnvelope,
                    url: "https://www.twitter8.com"
                },
                {
                    icon: FaPhoneAlt,
                    url: "https://www.twitter9.com"
                },
            ]
        },
        {
            title: "School portal",
            links: [
                {
                    text: "primary school",
                    url: "/"
                },
                {
                    text: "college",
                    url: "/"
                },
                {
                    text: "staff",
                    url: "/"
                },
            ],
        },
    ]
    const year = new Date().getFullYear()
    return (
        <footer className="section footer-new">
            <div className="section-center base-section">
                {
                    data.map((item, index) =>
                        <FooterArticle key={index} {...item} />
                    )
                }
            </div>
            <div className='footer-coutersy'>
                <div className='divider'></div>
                <p>&copy; <span id="date">{year}</span> wonder sprout academy. all rights reserved</p>

            </div>
        </footer>

    )
}

interface ILink {
    text: string;
    url: string
}
interface ICons {
    url: string;
    icon: IconType
}
interface IFooterArticle {
    title?: string
    discription?: string;
    links?: ILink[];
    icons?: ICons[];
}
const FooterArticle = ({ title, discription, links, icons }: IFooterArticle) => {
    return (
        <article className='footer-article'>
            {title && <h5>{title}</h5>}
            {discription && <p>{discription}</p>}
            {links && <ul className="footer-links">
                {
                    links.map(
                        (item) =>
                            <li key={item.text}>
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                    )
                }
            </ul>}
            {icons && <ul className="footer-social-icons">
                {
                    icons.map((item) =>
                        <li key={item.url}>
                            <Link href={item.url} className="footer-social-icon">
                                {<item.icon />}
                            </Link>
                        </li>
                    )
                }
            </ul>}

        </article>
    )
}

export default Footer