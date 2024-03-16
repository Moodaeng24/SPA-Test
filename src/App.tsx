import React, { FormEvent, useState,useEffect } from 'react';
// import logo from './logo.svg';
import 'antd/dist/reset.css';
import './App.css';
import {Button,Radio,DatePicker, Card, Input, Flex, Select} from 'antd'
import type { DatePickerProps } from 'antd';
// import { blue } from '@ant-design/colors';



const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

function App() {
  console.log('Render');


  let userName = 0;
  let phoneNumber = 0;
  let TravelNumber = 0;
  let Salary = 0;
  function userNameFunction(event: FormEvent<HTMLInputElement>){
    userName = event.currentTarget.valueAsNumber;
    console.log("ชื่อ:",userName );
  }

  function phoneNumberFunction(event: FormEvent<HTMLInputElement>){
    phoneNumber = event.currentTarget.valueAsNumber;
    console.log("เบอร์โทร:",phoneNumber );
  }
  
  function TravelNumberFunction(event: FormEvent<HTMLInputElement>){
    TravelNumber = event.currentTarget.valueAsNumber;
    console.log("หลังสือเดินทาง:",TravelNumber );
  }

  function SalaryFunction(event: FormEvent<HTMLInputElement>){
    Salary = event.currentTarget.valueAsNumber;
    console.log("เงินเดือนที่คาดหวัง:",Salary );
  }

  return (
    <div className="App-Header">
      <div className="Header flex">
        <p className='Title'  style={{ margin: 30 }}>การจัดการหน้าฟอร์ม</p>

      </div>

      <Card style={{ width: 900 , height:400, marginLeft:300}}>
        <div className="Content">
          <div className="Content-body ">
{/* row 1*/}
            <Flex>    
              <div className='space-align-block2'>         
                <label htmlFor=""><span className="color-red">*</span>คำนำหน้า:</label>
                <Select
                  defaultValue="lucy"
                  style={{ width: 70 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ]}/> 
              </div>      
            <div>
              <span className="color-red" style={{ marginLeft: 5 }}>*</span>
              ชื่อจริง:<Input placeholder="Basic usage" style={{ width: 290 }} onInput={userNameFunction} type='number'/>
            </div>
            <div>
              <label htmlFor=""><span className="color-red" style={{ marginLeft: 5}}>*</span>นามสกุล:</label>
              <Input placeholder="Basic usage" style={{ width: 290 }} />
            </div>
            </Flex>
            &nbsp;
{/* row2 */}
            <Flex>
              <div>
              <label htmlFor=""><span className="color-red" >*</span>วันเกิด:</label>
              <DatePicker onChange={onChange} style={{ width: 200 }} />
              </div>
              <div>         
                <label htmlFor=""><span className="color-red"style={{ marginLeft: 10 }}>*</span>สัญชาติ:</label>
                <Select
                  defaultValue="สัญชาติ"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'Thai', label: 'ไทย' },
                    { value: 'China', label: 'จีน' },
                    { value: ' England', label: 'อังกฤษ' },
                    { value: 'France', label: 'ฝรั่งเศษ' },
                    { value: 'Australia', label: 'ออสเตรเลีย' },
                    { value: 'Spain', label: 'สเปน' },
                    { value: 'Laos', label: 'ลาว' },
                    { value: 'Etc.', label: 'อื่นๆ' }
                  ]}/> 
              </div>      
            </Flex>
            &nbsp;
{/* row3 */}
            <Flex>
              <div>
              <label htmlFor="">เลขบัตรประชาชน:</label>
              <Input style={{ width: 50, marginLeft: 10,marginRight:10 }} />-
              <Input style={{ width: 70, marginLeft: 10,marginRight:10 }} />-
              <Input style={{ width: 120, marginLeft: 10,marginRight:10 }} />-
              <Input style={{ width: 70, marginLeft: 10,marginRight:10 }} />-
              <Input style={{ width: 50, marginLeft: 10,marginRight:10 }} /> 
              </div>
            </Flex>
            &nbsp;
{/* row4 */}
            <Flex>
            <label htmlFor=""><span className="color-red">*</span>เพศ:</label>
            <Radio style={{ marginLeft: 10 }}>ผู้ชาย</Radio>
            <Radio>ผู้หญิง</Radio>
            <Radio>ไม่ระบุ</Radio>
            </Flex>
            &nbsp;
{/*row 5  */}
            <Flex>
            <div className='space-align-block2'>         
                <label htmlFor=""><span className="color-red" >*</span>หมายเลขโทรศัพท์มือถือ:</label>
                <Select
                  defaultValue="lucy"
                  style={{ width: 80, marginLeft: 10,marginRight:10 }}
                  onChange={handleChange}
                  options={[
                    { value: 'Thai', label: '+66' },
                    { value: 'China', label: '+86 ' },
                    { value: ' England', label: '+39 ' },
                    { value: 'France', label: '+33 ' },
                    { value: 'Australia', label: '+61  ' },
                    { value: 'Spain', label: '+34 ' },
                    { value: 'Laos', label: '+81 ' },
                    { value: 'Etc.', label: 'อื่นๆ' }
                  ]}/> -
                  <Input style={{ width: 200, marginLeft: 10 }} onInput={phoneNumberFunction} type='number'/>
              </div> 
            </Flex>
            &nbsp;
{/* row6 */}
            <Flex>
            <div className='space-align-block2'>         
                <label htmlFor="">หนังสือเดินทาง:</label>
                <Input style={{ width: 370, marginLeft: 10 }} onInput={TravelNumberFunction} type='number'/>
              </div>
              </Flex>
              &nbsp;
{/* row7 */}
              <Flex>
              <div className='space-align-block2'>         
                <label htmlFor=""><span className="color-red">*</span>เงินเดือนที่คาดหวัง:</label>
                <Input style={{ width: 340, marginLeft: 10 }} onInput={SalaryFunction} type='number' />
              </div>
                  <div>
                  <Button style={{ marginLeft: 100 }}>ล้างข้อมูล</Button>
                  <Button style={{ marginLeft: 10 }}>ส่งข้อมูล</Button>
                  </div>

              </Flex>




          </div>
        </div>
      </Card>

    </div>
  );
}


// &nbsp;
{/* <Button type='primary'>Ant</Button> */}
export default App;
