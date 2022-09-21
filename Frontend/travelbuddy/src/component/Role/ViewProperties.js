import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import ImageSrc from '../Images/BG1.jpg';
import './Style.css';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function ViewProperties(props) {
    let { result } = props;
    let navigate = useNavigate();

    const onPropertyBook = (pid, address) => {
        let userId = localStorage.getItem('userid');
        navigate('/bookproperty', { state: { userId, pid, address } });
    }

    const Header = () => <Image alt="Card" src={ImageSrc} />;

    const Footer = (props) => {
        let { pid, address } = props
        return <div>
            <Button style={{ marginRight: '5px' }} icon="pi pi-heart-fill" iconPos="right" label="Favorite" />
            <Button icon="pi pi-check" iconPos="right" label="Book" onClick={() => onPropertyBook(pid, address)} />
        </div>
    }


    return <div className='property-container'>
        {
            result?.length > 0 ?
                result?.map((card, key) => {
                    let { pid, address, rent, areaData, description, facilityList } = card || {};
                    let { furnished, parking, security_guard, lift, cctv } = facilityList?.[0] || {};
                    let { area_name, city, pincode } = areaData?.[0] || {};

                    return <Card
                        className={`property-cards`}
                        key={`property-${key}`}
                        footer={<Footer />}
                        header={<Header card={card} pid={pid} address={address}/>}
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
                                <div style={{ whiteSpace: 'nowrap', marginTop: '-46px' }}>
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
                : <span>No Data</span>

        }
    </div>

}

ViewProperties.defaultProps = {
    "result": []
}

export default ViewProperties