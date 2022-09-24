import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { getImageList } from '../imageHelper';
import './Style.css';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function ViewProperties(props) {
    let { result } = props;
    let navigate = useNavigate();

    const onPropertyBook = (pid, address,rent) => {
        let userId = localStorage.getItem('userid');
        navigate('/bookproperty', { state: { userId, pid, address,rent } });
    }

    const Header = (index) => <Image alt="Card" src={getImageList[index]} />;

    const Footer = (props) => {
        let { pid, address,rent } = props
        return <div>
            <Button icon="pi pi-check" iconPos="right" label="Book" onClick={() => onPropertyBook(pid, address,rent)} />
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
                        footer={<Footer pid={pid} address={address} rent={rent}/>}
                        header={<Header card={card}  key={key} />}
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