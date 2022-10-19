import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import Image from 'next/image';

const Bill = () => {
  return (
    <Document>
      <Page>
        <View>
          <Text>
            <div className='flex items-start justify-between'>
              <Image
                className='cursor-pointer'
                src='/logo.png'
                alt='carbooking logo'
                width={100}
                height={50}
                priority
              />

              <div className='flex flex-col items-center'>
                <p class='m-0 blue-text'>www.carbooking.me</p>
                <p class='m-0 blue-text'>office@carbooking.me</p>
                <p class='m-0 blue-text'>(+382) 68 55 89 43</p>
                <p class='m-0 blue-text'>(+382) 69 55 89 43</p>
              </div>
            </div>
          </Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Bill;
