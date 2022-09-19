import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import ImageSrc from '../Images/BG1.jpg';
import './Style.css';
import { Button } from 'primereact/button';

function ViewProperties(props) {
    let { result } = props;

    const Header = () => <Image alt="Card" src={ImageSrc} />;

    const Footer = () =>{
        return <div>
          <Button style={{marginRight: '5px'}}icon="pi pi-heart-fill" iconPos="right"  label="Favorite"/>
          <Button icon="pi pi-check" iconPos="right"  label="Book"/>
        </div>
    }

    return <div className='property-container'>
        {
            result?.map((card, key) => {
                let { address, rent, areaData, description, facilityList } = card || {};
                let { furnished, parking, security_guard, lift, cctv } = facilityList?.[0] || {};
                let { area_name, city, pincode } = areaData?.[0] || {};

                return < Card
                    className={`property-cards`}
                    key={`property-${key}`}
                    footer={<Footer/>}
                    header={<Header card={card} />}
                >
                    <div className='card-content'>
                        <div className='card-property-name'>
                            {address}
                        </div>
                        <div style={{ margin: '-30px 0px 0px 0px' }}>
                            <div>Rs- {rent}/-</div>
                            <div style={{ margin: '-40px' }}> {area_name} {city} {pincode}</div>
                        </div>
                        <div>
                            <div className='description-card' title={description}> {description}</div>
                            <div style={{whiteSpace: 'nowrap', marginTop: '-46px'}}>
                                Furnished : {furnished || '--'},
                                Parking : {parking || '--'},
                                Security Guard : {security_guard || '--'},
                                Lift: {lift || '--'},
                                CCTV: {cctv || '--'}

                            </div>
                        </div>

                    </div>

                </Card>
            })

        }
    </div>

}

ViewProperties.defaultProps = {
    "result": [
        {
            "address": "silver oak,shantinagar",
            "description": "3 BHK duplex with sea facing and swimming pool",
            "pid": 1,
            "rent": "7500",
            "areaData": [
                {
                    "pincode": "431103",
                    "area_name": "kannad",
                    "city": "sambhajinagar"
                }
            ],
            "facilityList": [
                {
                    "fid": 1,
                    "furnished": "No",
                    "parking": "Yes",
                    "security_guard": "No",
                    "lift": "No",
                    "cctv": "Yes"
                }
            ]
        },
        {
            "address": "House no:24",
            "description": "2-bhk flat",
            "pid": 2,
            "rent": "5000",
            "areaData": [
                {
                    "pincode": "412218",
                    "area_name": "dhayari",
                    "city": "pune"
                }
            ],
            "facilityList": [
                {
                    "fid": 4,
                    "furnished": "yes",
                    "parking": "yes",
                    "security_guard": "yes",
                    "lift": "yes",
                    "cctv": "yes"
                }
            ]
        },
        {
            "address": "Nisarg bhavan",
            "description": "3-bhk farmhouse",
            "pid": 3,
            "rent": "5000",
            "areaData": [
                {
                    "pincode": "412218",
                    "area_name": "dhayari",
                    "city": "pune"
                }
            ],
            "facilityList": [
                {
                    "fid": 5,
                    "furnished": "yes",
                    "parking": "yes",
                    "security_guard": "yes",
                    "lift": "no",
                    "cctv": "yes"
                }
            ]
        },
        {
            "address": "G-5",
            "description": "mpjffgbbwg",
            "pid": 4,
            "rent": "5000",
            "areaData": [
                {
                    "pincode": "415002",
                    "area_name": "shaniwar peth",
                    "city": "satara"
                }
            ],
            "facilityList": [
                {
                    "fid": 10,
                    "furnished": "no",
                    "parking": "yes",
                    "security_guard": "yes",
                    "lift": "no",
                    "cctv": "no"
                }
            ]
        },
        {
            "address": "100kps",
            "description": "Duplex",
            "pid": 5,
            "rent": "5000",
            "areaData": [
                {
                    "pincode": "420236",
                    "area_name": "murud",
                    "city": "Latur"
                }
            ],
            "facilityList": [
                {
                    "fid": 11,
                    "furnished": "yes",
                    "parking": "no",
                    "security_guard": "no",
                    "lift": "no",
                    "cctv": "yes"
                }
            ]
        },
        {
            "address": "Matoshri Palace",
            "description": "Royal fort",
            "pid": 6,
            "rent": "15000",
            "areaData": [
                {
                    "pincode": "431103",
                    "area_name": "kannad",
                    "city": "sambhajinagar"
                }
            ],
            "facilityList": [
                {
                    "fid": 12,
                    "furnished": "yes",
                    "parking": "yes",
                    "security_guard": "yes",
                    "lift": "yes",
                    "cctv": "yes"
                }
            ]
        },
        {
            "address": "Antilla",
            "description": "5-BHK Villa with private pool",
            "pid": 10,
            "rent": "25000",
            "areaData": [
                {
                    "pincode": "416103",
                    "area_name": "marine drive",
                    "city": "Mumbai"
                }
            ],
            "facilityList": [
                {
                    "fid": 16,
                    "furnished": "yes",
                    "parking": "yes",
                    "security_guard": "yes",
                    "lift": "yes",
                    "cctv": "yes"
                }
            ]
        }
    ]
}

export default ViewProperties