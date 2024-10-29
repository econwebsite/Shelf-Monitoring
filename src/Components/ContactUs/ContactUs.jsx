import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input, Select, Row, Col, message } from 'antd'; // Make sure Select is imported
import axios from 'axios';
import './Contactus.css'; // Import custom CSS for styling
import AnimatedButton from "../../Components/ButtonComp/AnimationButton"
import countryList from 'react-select-country-list';
import { Helmet } from 'react-helmet-async';

const { TextArea } = Input;
const { Option } = Select;

const countries1 = [
  { code: '+1', name: 'United States' },
  { code: '+1', name: 'Canada' },
  { code: '+52', name: 'Mexico' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+61', name: 'Australia' },
  { code: '+91', name: 'India' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+39', name: 'Italy' },
  { code: '+34', name: 'Spain' },
  { code: '+55', name: 'Brazil' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
  { code: '+82', name: 'South Korea' },
  { code: '+27', name: 'South Africa' },
  { code: '+7', name: 'Russia' },
  { code: '+90', name: 'Turkey' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+54', name: 'Argentina' },
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+51', name: 'Peru' },
  { code: '+66', name: 'Thailand' },
  { code: '+84', name: 'Vietnam' },
  { code: '+65', name: 'Singapore' },
];



const usaStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];


const ContactUs = () => {

  const [form] = Form.useForm();
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [showStates, setShowStates] = useState(true);
  const [isContactPage, setIsContactPage] = useState(false);


  const countries = useMemo(() => {
    return countryList().getData().map(country => ({
    value: country.value,
    label: country.label
    }));
    }, []);
  const onFinish = (values) => {
    form.resetFields();
    axios.post(`https://api.dental.e-consystems.com/api/contactusform`, { values })
      .then(result => {
        message.success('Message sent successfully!');
        //onClose();
      })
      .catch(err => console.log(err));
  };

  const handleCountryChange = (value) => {
    const country = countries.find(c => c.value === value);
    setSelectedCountry(value);
    setShowStates(country?.value === 'US');
    if (country?.value !== 'US') {
      form.setFieldsValue({ state: undefined });
    }
  };

  const handleEmailValidate = async (e) => {
    const email = e.target.value;
    if (email) {
      axios.post(`https://api.dental.e-consystems.com/api/validateEmail`, { email })
        .then(result => {
          if (result.data.status === 'valid' || result.data.status === 'catch-all' || result.data.status === 'role_based') {
            if (!result.data.free_email) {
              return true
            }
            else {
              form.setFields([
                {
                  name: 'email',
                  errors: ["Please enter valid email ID"],
                },
              ]);
            }
          }
          else {
            form.setFields([
              {
                name: 'email',
                errors: ["Please enter valid email ID"],
              },
            ]);
          }

        })
        .catch(err => console.log(err));

    }
  };
  useEffect(() => {
    let url = window.location.pathname.replace('/', '');
    if (url === "company/contact-us") {
      setIsContactPage(true);
    }
  }, []);
  return (
    <div className='total-contact'>
      {isContactPage && <Helmet>
        <title>Contact Us</title>
        <meta name='description' content='Have questions or need support? Reach out to e-con Systems for inquiries, assistance, or more information about our products and services.' />
      </Helmet>}
      <h1 className='Contact-us'>CONTACT US</h1>

      <span className='Spam-questions'>Do You Have Any Questions?</span>

      <div className="Contact-ted">
        <div className="mainContainer">
          <Form
            form={form}
            name="contactForm"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              country: 'United States',
              state: 'AL',
            }}
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                  
                >
                  <Input placeholder="Name*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="companyName"
                  rules={[{ required: true, message: 'Please enter your company name' }]}
                >
                  <Input placeholder="Company Name*" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input placeholder="Email*" autoComplete='off' onPaste={(e) => {
                    e.preventDefault()
                    return false;
                  }} onBlur={handleEmailValidate} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="contactNumber"
                  rules={[{ message: 'Please enter your phone number' }]}
                >
                  <Input
                    className='contact-num-box'
                    placeholder="Contact Number"
                  //addonBefore={selectedCountry ? countries.find(c => c.name === selectedCountry)?.code : ''} 
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="country"
                  rules={[{ required: true, message: 'Please select your country' }]}
                >
                  <Select
                   showSearch
                   placeholder="Select country"
                   onChange={handleCountryChange}
                  >
                   {countries.map(country => (
<Option key={country.value} value={country.value}>
{country.label}
</Option>
))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                {showStates && (
                  <Form.Item
                    name="state"
                    rules={[{ required: showStates, message: 'Please select your state' }]}
                  >
                    <Select placeholder="Select state">
                      {usaStates.map((state) => (
                        <Option key={state.code} value={state.code}>
                          {state.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="queries"
                  rules={[{ message: 'Please describe your queries' }]}
                >
                  <TextArea placeholder="Describe Your Queries" rows={5} />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="center">
              <Col>
                <Form.Item>
                  <AnimatedButton
                    type="primary"
                    htmlType="submit"
                    className="Contacts-btn"
                    text="Submit"
                    backgroundColor="#344ea1"
                    animationColor="#69ba2f"
                    hoverColor="yellow"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
