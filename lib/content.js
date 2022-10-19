import CheckmarkSVG from 'public/svg/checkmarkIcon.svg';
import AgeSVG from 'public/svg/ageIcon.svg';
import DriverSVG from 'public/svg/driveridIcon.svg';
import CreditcardSVG from 'public/svg/creditcardIcon.svg';
import InsuranceSVG from 'public/svg/insuranceIcon.svg';
import BorderSVG from 'public/svg/borderIcon.svg';
import PoliceSVG from 'public/svg/policeIcon.svg';
import DepositeSVG from 'public/svg/depositeIcon.svg';
import PumpSVG from 'public/svg/pumpIcon.svg';

export const navigation = {
  en: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Cars',
      url: '/cars',
    },
    {
      name: 'Conditions',
      url: '/conditions',
    },
    {
      name: 'FAQ',
      url: '/faq',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ],
  sr: [
    {
      name: 'Početna',
      url: '/',
    },
    {
      name: 'Vozila',
      url: '/cars',
    },
    {
      name: 'Uslovi',
      url: '/conditions',
    },
    {
      name: 'Česta Pitanja',
      url: '/faq',
    },
    {
      name: 'Kontakt',
      url: '/contact',
    },
  ],
};

export const herosection = {
  en: {
    h1: (
      <>
        Perfect Way To Rent <br className='md:flex hidden' /> a Car On Our{' '}
        Platform
      </>
    ),
    h3: (
      <>
        Car Booking Montenegro is offering you great vehicles for best prices{' '}
        <br className='xl:flex hidden' />
        without hidden costs!
      </>
    ),
  },
  sr: {
    h1: (
      <>
        Savršen Način Da Rentirate <br className='md:flex hidden' /> Vozilo Na
        Našoj Platformi
      </>
    ),
    h3: (
      <>
        Car Booking Montenegro Vam nudi odlična vozila po najpovoljnijim
        cijenama <br className='xl:flex hidden' /> bez skrivenih troškova!
      </>
    ),
  },
};

export const reservationform = {
  en: {
    pickuplocation: 'Pick up location',
    returnlocation: 'Return location',
    pickupdatetime: 'Pick up date and time',
    returndatetime: 'Return date and time',
    button: 'Reserve',
  },
  sr: {
    pickuplocation: 'Mjesto preuzimanja',
    returnlocation: 'Mjesto vraćanja',
    pickupdatetime: 'Datum i vrijeme preuzimanja',
    returndatetime: 'Datum i vrijeme vraćanja',
    button: 'Rezerviši',
  },
};

export const carssection = {
  en: {
    h2: 'Car Catalouge',
    p: `Car Booking Montenegro offers a large number of various vehicles. They
    are properly serviced and maintained with special care of their
    hygiene and disinfection, which guarantees a carefree ride to your
    destination anywhere in Montenegro and beyond.`,
  },
  sr: {
    h2: 'Naša Vozila',
    p: `Car Booking Montenegro nudi veliki broj raznovrsnih vozila, koja se uredno servisiraju i održavaju uz posebnu brigu o njihovoj higijeni i dezinfekciji, što garantuje bezbrižnu vožnju do cilja bilo gdje u Crnoj Gori i šire.`,
  },
};

export const car = {
  en: {
    day: 'Day',
    reserve: 'Reserve',
    select: 'Select',
    selected: 'Selected',
  },
  sr: {
    day: 'Dan',
    reserve: 'Rezerviši',
    select: 'Selektuj',
    selected: 'Selektovan',
  },
};

const icon = <CheckmarkSVG className='w-8 h-8' />;
const paragraph = 'md:grid-cols-2 grid grid-cols-1 gap-8 mb-16';
const listHeader = 'flex items-center mb-4 text-lg font-semibold uppercase';
const listParagraph = 'text-justify mb-8';

export const services = {
  en: {
    h2: 'Why to choose Car Booking',
    p: (
      <div className={paragraph}>
        <p className='text-justify'>
          If you are in Montenegro and you want to rent a car, Car Booking
          Montenegro offers you great vehicles for best prices, without hidden
          costs! In a very simple and safe way you can rent a vehicle from our
          offer and immediately start your journey and exploration of
          Montenegro, region and beyond!
        </p>
        <p className='text-justify'>
          With the highest quality service and maintenance of all our vehicles,
          as well as special care for their hygiene and disinfection, we
          guarantee a carefree ride that will lead you to your destination.
        </p>
        <p className='text-justify'>
          As an experienced team of young people, we have created a credible
          business strategy to gain the trust of our clients with the highest
          quality service, as well as the lowest price for car rental, to
          maintain business cooperation through short-term and long-term car
          rental, transfers within Montenegro and abroad.
        </p>
        <p className='text-justify'>
          Even so, for the purpose of carefree travel and first-class service,
          we are available to clients 7 days a week, 0-24h. At anytime,
          anywhere, the Car Booking Montenegro team is always there for you.
        </p>
      </div>
    ),
    leftList: [
      <>
        <h3 className={listHeader}>
          {icon} &nbsp; Free additional accessories
        </h3>
        <p className={listParagraph}>
          Lots of free additional accessories for a pleasant trip and stay in
          Montenegro - such as (welcome refreshment, child seat, extra driver,
          winter equipment - tires and snow chains, GPS navigation, umbrella,
          ball pump / mattress / tire, paper map of Montenegro, car charger for
          mobile phone).
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Vehicle Safety</h3>
        <p className={listParagraph}>
          Technically correct vehicles, which have all the necessary equipment
          and documents needed to drive in Montenegro, the region and EU
          countries.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Covid Free</h3>
        <p className={listParagraph}>
          The vehicles have been previously disinfected and thoroughly cleaned.
          The vehicle is not used for at least 24 hours before delivery.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Additional appendices</h3>
        <p className={listParagraph}>
          Possibility to rent extra appendices at reasonable prices such as
          suitcase suspenders and surcharges for crossing the border (green
          card).
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Pet Friendly</h3>
        <p className={listParagraph}>For your pets.</p>
      </>,
    ],
    rightList: [
      <>
        <h3 className={listHeader}>{icon} &nbsp; Insurance</h3>
        <p className={listParagraph}>
          Our insurance covers all possible damages to the vehicle, and also
          includes a package of protection against theft and health care for
          passengers.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Vehicle Delivery</h3>
        <p className={listParagraph}>
          Wherever you are in Montenegro - either at the airport or in your
          temporary (or permanent) location of accommodation, we can deliver the
          vehicle to your address.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Support 24/7</h3>
        <p className={listParagraph}>
          Car booking allows you to contact us or book a vehicle at any time,
          free of charge. Our agents are always ready to answer all your
          inquiries, needs and provide support 24/7.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; 4G Wifi Router</h3>
        <p className={listParagraph}>
          Possibility to rent 4G wi-fi devices with unlimited internet flow
          during car rental, which you can be used outside the vehicle.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Unlimited Mileage</h3>
        <p className={listParagraph}>
          Due to unlimited mileage, which is included in the price of your
          reservation, you can drive as much as you want.
        </p>
      </>,
    ],
  },
  sr: {
    h2: 'Zašto Car Booking',
    p: (
      <div className={paragraph}>
        <p className='text-justify'>
          Ukoliko se nalazite u Crnoj Gori i želite da iznajmite vozilo, Car
          Booking Montenegro Vam nudi odlična vozila po najpovoljnijim cijenama,
          bez skrivenih troškova! Na vrlo jednostavan i siguran način možete
          iznajmiti vozilo iz naše ponude i odmah započeti svoje putovanje i
          istraživanje Crne Gore, regiona i šire!
        </p>
        <p className='text-justify'>
          Kao iskusan tim mladih ljudi kreirali smo kredibilnu poslovnu
          strategiju, da najkvalitetnom uslugom, a ujedno i najnižom cijenom za
          najam vozila, zadobijemo povjerenje naših klijenata i održimo poslovnu
          saradnju kroz kratkoročni I dugoročni najam vozila, transfere unutar
          Crne Gore i inostranstvo.
        </p>
        <p className='text-justify'>
          Uz najkvalitetniji servis i održavanje svih naših vozila, kao i
          posebnu brigu o njihovoj higijeni i dezinfekciji, garantujemo
          bezbrižnu vožnju koja će Vas dovesti do cilja.
        </p>
        <p className='text-justify'>
          Ujedno, u cilju bezbrižnog putovanja i prvoklasne usluge stojimo
          klijentima na raspolaganju 7 dana u nedelji, 0-24h. U bilo koje doba,
          na bilo kom mjestu, tim Car Booking Montenegro je uvijek tu za Vas.
        </p>
      </div>
    ),
    leftList: [
      <>
        <h3 className={listHeader}>{icon} &nbsp; Besplatni Dodaci</h3>
        <p className={listParagraph}>
          Mnoštvo besplatnih dodataka za ugodno putovanje i boravak u Crnoj Gori
          kao sto su (osvježenje za dobrodošlicu, dječije sjedište, dodatni
          vozač, zimska oprema - gume i lanci za snijeg, GPS navigacija,
          kišobran, pumpa za loptu/dušek/gumu, papirna mapa Crne Gore, auto
          punjac za mobilni telefon).
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Ispravnost Vozila</h3>
        <p className={listParagraph}>
          Tehnički ispravna vozila, koja posjeduju svu neophodnu opremu i
          dokumenta potrebna za vožnu u Crnoj Gori, regionu i zemljama EU.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Covid Free</h3>
        <p className={listParagraph}>
          Vozila su prije dezinfikovana I detaljno očišćenja, a najmanje 24 časa
          prije izdavanja vozilo se ne koristi.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Ekstra Dodaci</h3>
        <p className={listParagraph}>
          Mogućnost iznamljivanja ekstra dodataka po povoiljnim cijenama poput
          kufer tregera i doplate za prelazak granice (zeleni karton).
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Pet Friendly</h3>
        <p className={listParagraph}>Za vaše kućne ljubimce.</p>
      </>,
    ],
    rightList: [
      <>
        <h3 className={listHeader}>{icon} &nbsp; Osiguranje</h3>
        <p className={listParagraph}>
          Naše osiguranje pokriva sve eventualne štete na vozilu, a takođe
          uključuje i paket zaštite od krađe i zdravstvenu njegu putnika.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Dostava Vozila</h3>
        <p className={listParagraph}>
          Gdje god da se nalazite u Crnoj Gori - bilo na aerodromu ili u Vašem
          privremenom (ili trajnom) smještaju, možemo Vam dostaviti vozilo na
          željenu adresu.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Podrška 24/7</h3>
        <p className={listParagraph}>
          Car booking Vam omogućava da nas kontaktirate ili rezervišete vozilo u
          bilo kom trenutku, bez ikakve doplate. Naši agenti su uvijek pripravni
          da odgovore na sve Vaše upite, potrebe i pruže podršku 24/7.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; 4G Wifi Ruter</h3>
        <p className={listParagraph}>
          Mogućnost iznajmljivanja 4G wi-fi uređaja sa neograničenim internet
          protokom tokom najma vozila, koji možete koristiti i van vozila.
        </p>
      </>,
      <>
        <h3 className={listHeader}>{icon} &nbsp; Neograničena Kilometraža</h3>
        <p className={listParagraph}>
          Možete voziti slobodno koliko god želite jer je neograničena
          kilometraža uključena u cijenu Vaše rezervacije.
        </p>
      </>,
    ],
  },
};

const userClass = 'font-medium';
const stateClass = 'italic text-slate-400';

export const testemonials = {
  en: {
    h2: 'What do our clients say about us?',
    p: 'We are extremely honored and pleased that a large number of clients brought positive impressions about the company Car Booking Montenegro, whether they are domestic or foreign clients.',
    testemonials: [
      {
        img: '/tamara.jpeg',
        review:
          'My warm recommendation. I often travel and use car rental services. carbooking.me offers many free add-ons.',
        userLine: (
          <>
            <span className={userClass}>Tamara Milaš</span>
            <br />
            <span className={stateClass}>Montenegro</span>
          </>
        ),
      },
      {
        img: '/marjana.jpeg',
        review:
          'Really good service. Always on time and with no problems with the pick up location and booking. I warmly recommend to everyone!👌',
        userLine: (
          <>
            <span className={userClass}>Marjana Krsmanović</span>
            <br />
            <span className={stateClass}>Spain</span>
          </>
        ),
      },
      {
        img: '/daniel.jpeg',
        review:
          'Tuve una gran experiencia con esta agencia de alquiler carbooking.me. Fueron realmente pacientes y serviciales durante el proceso de pedido y fueron muy amables cuando recogí y dejé el coche ¡Muy recomendable!',
        userLine: (
          <>
            <span className={userClass}>Daniel Mañas Herreros</span>
            <br />
            <span className={stateClass}>Spain</span>
          </>
        ),
      },
      {
        img: '/sasa.jpeg',
        review:
          'Meilleures prix, qualité de service a très haut niveau, personnel sympathique. En un mot, merveilleuse compagnie.',
        userLine: (
          <>
            <span className={userClass}>Saša Krivokapić</span> <br />
            <span className={stateClass}>France</span>
          </>
        ),
      },
    ],
  },
  sr: {
    h2: 'Šta klijenti kažu o nama?',
    p: 'Izuzetna nam je čast i zadovoljstvo što veliki broj klijenata nosi pozitivne utiske o firmi Car Booking Montenegro, bilo da se radi o domaćim ili inostranim klijentima.',
    testemonials: [
      {
        img: '/tamara.jpeg',
        review:
          'My warm recommendation. I often travel and use car rental services. carbooking.me offers many free add-ons.',
        userLine: (
          <>
            <span className={userClass}>Tamara Milaš</span>
            <br />
            <span className={stateClass}>Montenegro</span>
          </>
        ),
      },
      {
        img: '/marjana.jpeg',
        review:
          'Really good service. Always on time and with no problems with the pick up location and booking. I warmly recommend to everyone!👌',
        userLine: (
          <>
            <span className={userClass}>Marjana Krsmanović</span>
            <br />
            <span className={stateClass}>Spain</span>
          </>
        ),
      },
      {
        img: '/daniel.jpeg',
        review:
          'Tuve una gran experiencia con esta agencia de alquiler carbooking.me. Fueron realmente pacientes y serviciales durante el proceso de pedido y fueron muy amables cuando recogí y dejé el coche ¡Muy recomendable!',
        userLine: (
          <>
            <span className={userClass}>Daniel Mañas Herreros</span>
            <br />
            <span className={stateClass}>Spain</span>
          </>
        ),
      },
      {
        img: '/sasa.jpeg',
        review:
          'Meilleures prix, qualité de service a très haut niveau, personnel sympathique. En un mot, merveilleuse compagnie.',
        userLine: (
          <>
            <span className={userClass}>Saša Krivokapić</span> <br />
            <span className={stateClass}>France</span>
          </>
        ),
      },
    ],
  },
};

export const newsletter = {
  en: {
    h3: 'Subscribe to our newsletter',
    p: 'Subscribe to our newsletter so that you can get latest news and notifications about our offers.',
    placeholder: 'Enter email address',
    button: 'Subscribe',
    subscribed: "Subscribed"
  },
  sr: {
    h3: 'Prijative se za nase novosti',
    p: 'Pridružite se našoj mejling listi, kako biste redovno dobijali obavještenja o novinama u našoj ponudi i specijalnim ponudama.',
    placeholder: 'Unesite email adresu',
    button: 'Prijavi se',
    subscribed: "Prijavljen"
  },
};

export const footer = {
  en: {
    p: `Car Booking Montenegro is focused on the client, listens to their
    needs and provides them with the highest quality car rental service.
    Although stationed in Montenegro, we strive to achieve a global
    reputation by creating effective and quality corporate identity.`,
    sitemap: 'Sitemap',
    media: 'Social media',
  },
  sr: {
    p: 'Car Booking Montenegro je usmjeren na klijenta, sluša njegove potrebe i pruža mu najkvalitetniju uslugu iznajmljivanja vozila. Iako stacionirani u Crnoj Gori nastojimo ostvariti globalnu reputaciju kreiranjem učinkovite i kvalitetne korporativne prepoznatljivosti.',
    sitemap: 'Mapa sajta',
    media: 'Društvene mreže',
  },
};

export const conditionspage = {
  en: {
    conditions: [
      {
        icon: <AgeSVG />,
        h3: 'Drivers required age',
        p: 'To rent a car from Car Booking you need to be at lease 21 years old.',
      },
      {
        icon: <DriverSVG />,
        h3: 'Drivers licence',
        p: `
            It's necessary to give drivers licence for inspection, also your
            driver licence needs to be from at least 2 years ago.
          `,
      },
      {
        icon: <CreditcardSVG />,
        h3: 'Payment',
        p: `
            Payment is done by credit card or cash, this step is before
            delivery.
          `,
      },
      {
        icon: <InsuranceSVG />,
        h3: 'Insurance',
        p: `
            Comprehensive insurance and insurance of passengers, which covers
            eventual accidents, theft and medical care of passengers are
            included in reservation price.
          `,
      },
      {
        icon: <BorderSVG />,
        h3: 'Border passing',
        p: 'Car booking approval is needed for trips outside of the state.',
      },
      {
        icon: <PoliceSVG />,
        h3: 'Police record',
        p: `
            In case of accident, even the ones with minimal damage (scratches,
            glass cracks etc.), it's necessary to own police record, else client
            will cover all costs induced by damage or theft.
          `,
      },
      {
        icon: <DepositeSVG />,
        h3: 'Deposite',
        p: `
            During reservation payment Car Booking requires deposit, which will
            be activated in case you need to make payment for accident.
          `,
      },
      {
        icon: <PumpSVG width='46' />,
        h3: 'Fuel',
        p: `
            Vehicle needs to be returned with the same amount of fuel it was
            delivered with.
          `,
      },
    ],
  },
  sr: {
    conditions: [
      {
        icon: <AgeSVG />,
        h3: 'Starost vozača',
        p: `
            Da biste iznajmili vozilo od Car Booking-a morate imate 21 godinu
            starosti.
          `,
      },
      {
        icon: <DriverSVG />,
        h3: 'Vozačka dozvola',
        p: `
            Neophodno je dati na uvid vozačku dozvolu u čijem ste posjedu
            najmanje 2 godine.
          `,
      },
      {
        icon: <CreditcardSVG />,
        h3: 'Plaćanje',
        p: 'Plaćanje vršite u kešu ili karticom, pri preuzimanju vozila.',
      },
      {
        icon: <InsuranceSVG />,
        h3: 'Osiguranje',
        p: `
            Kasko osiguranje, osiguranje putnika i trećih lica, čime se
            pokrivaju sve eventualne nezgode, krađa i medicinska njega putnika
            uključeni su u cijenu rezervacije.
          `,
      },
      {
        icon: <BorderSVG />,
        h3: 'Prelazak granice',
        p: 'Za prelazak državne granice neophodna je dozvola Car Booking-a.',
      },
      {
        icon: <PoliceSVG />,
        h3: 'Policijski zapisnik',
        p: `
            U slučaju saobraćajne nezgode, pa čak i one sa minimalnim
            posledicama (ogrebotina, pukotina na staklu itd), neophodno je
            posjedovati policijski zapisnik, u suprotnom klijent će snositi sve
            troškove nastale štete ili krađe.
          `,
      },
      {
        icon: <DepositeSVG />,
        h3: 'Depozit',
        p: `
            Prilikom plaćanja rezervacije Car Booking zahtijeva depozit u visini
            učešća u šteti, koji će biti aktiviran u slučaju da snosite
            odgovornost u eventualnoj saobraćajnoj nezgodi.
          `,
      },
      {
        icon: <PumpSVG width='46' />,
        h3: 'Gorivo',
        p: `
            Vozilo je neophodno vratiti sa istom količinom goriva sa kojom je i
            preuzeto.
          `,
      },
    ],
  },
};

export const faqpage = {
  en: {
    h2: 'Q&A',
    questions: [
      {
        question: 'How to book a vehicle?',
        answer:
          'A vehicle can be booked online, on the website www.carbooking.me, by phone +38268558943 (Viber, Whatsapp), by contact from the contact form or by email office@carbooking.me.',
      },
      {
        question: 'Is it possible to make changes of the reservation?',
        answer:
          'Yes, a reservation can be changed free of charge within 48 hours before picking up the vehicle.',
      },
      {
        question: 'Is it possible to cancel a reservation?',
        answer:
          'Yes, you can cancel free of charge within 48 hours before picking up the vehicle. In case you fail to cancel the reservation on time you are required to pay the full rental amount.',
      },
      {
        question:
          "Are there any additional costs if I don't return the car on the designated return date & time?",
        answer:
          'Time of renting refers to a period of 24 hours starting from the moment taking of the vehicle. After 2h of delayed return, you will be charged in the amount of one-day renting.',
      },
      {
        question:
          'I made a reservation but did not receive an email confirmation. What should I do?',
        answer:
          'In case you have not received an e-mail of booking confirmation please contact us: office@carbooking.me .',
      },
      {
        question: 'Do I have to return the vehicle with a full tank?',
        answer:
          'In the contract of car renting is stated the amount of fuel in the car tank. When returning you are required to return the car with the same amount of fuel it had in the tank at pick-up. If there is less fuel in the tank when returning the car, you will be charged for the missing fuel in the amount of the market price.',
      },
      {
        question: 'Which types of credit and debit cards do you accept?',
        answer: 'We accept Visa, MasterCard and American Express.',
      },
      {
        question:
          "Can I take the vehicle out of the country in which I'm renting?",
        answer:
          'Yes, you may take the vehicle out of the Montenegro. This service will be charged, and it needs to be stated before renting, otherwise you will not be able to cross the border with the vehicle.',
      },
      {
        question: 'What is required for taking the vehicle?',
        answer:
          'Valid credit card or cash, valid driving licence and 2 years of driving experience.',
      },
      {
        question: 'What should I do if I am involved in an accident?',
        answer:
          'In case of an accident, it is important to call the police immediately (the police number is 122) and to inform the CarBooking representatives about the accident. In case that it’s not your fault for the happened accident, we will provide you with a new vehicle. However, you must fill in and sign all the papers you receive from the police. Details of the third parties involved in the accident must also be provided along with photos of the accident.',
      },
      {
        question: 'What if I return the car earlier?',
        answer:
          'If you decide or have to return the car before the designated time, we will refund your money.',
      },
      {
        question: 'Can I drive off-road?',
        answer:
          'If you drive off-road, all insurances the insurance ceases to be valid. Any damage to the vehicle in this case will be fully charged.',
      },
      {
        question: 'Is additional driver allowed to drive my vehicle?',
        answer:
          'Yes. Additional driver must meet all qualifications as the primary driver in regards to age and license requirements. However, please provide the name of another driver when you pick up the vehicle. This is important for security reasons and in case you are stopped by the police.',
      },
      {
        question: 'Children and safety',
        answer:
          'In many countries, children under 135 cm in height must sit in a child seat. You can get these seats in CarBooking free of charge. You need to indicate when booking that a baby seat is required.',
      },
      {
        question: 'What if I get lost?',
        answer:
          'Our recommendation is to get GPS navigation which is also free of charge.',
      },
      {
        question: 'How will I recieve the invoice?',
        answer:
          'We will send you the invoice by e-mail after return the vehicle. If you have any special requests, do not hesitate to contact us and we will do our best to fulfil your request.',
      },
      {
        question: "Do I need a driver's license?",
        answer:
          "Yes, we only accept the original valid driver's license. We do not accept a copy of your driver's license.",
      },
      {
        question: 'Can I extend my rental period?',
        answer:
          'Yes, but subject to availability, because during the season period it occasionally happens that we will have to reject your request if other clients have already made a reservation and we do not have free vehicles. In any case, contact us and check if it is possible to extend the reservation.',
      },
    ],
  },
  sr: {
    h2: 'Česta pitanja',
    questions: [
      {
        question: 'Kako rezervisati vozilo?',
        answer:
          'Vozilo mozete rezervisati online putem sajta www.carbooking.me, putem telefona +38268558943 (Viber, Whatsapp), kontaktom preko kontakt forme ili na email office@carbooking.me.',
      },
      {
        question: 'Da li je moguće promijeniti rezervaciju?',
        answer:
          'Da, možete promijeniti rezervaciju najkasnije 48 sati prije preuzimanja vozila bez dodatnih nadoknada.',
      },
      {
        question: 'Da li je moguće otkazati rezervaciju?',
        answer:
          'Da, možete otkazati rezervaciju najkasnije 48 sati prije preuzimanja vozila. Ako ne uspijete da otkažete rezervaciju na vrijeme dužni ste platiti cijeli iznos najma.',
      },
      {
        question:
          'Da li postoje dodatni troškovi ako kasnim pri vraćanju automobila?',
        answer:
          'Vrijeme iznajmljivanja vozila se odnosi na period od 24 sata i započinje od trenutka preuzimanja vozila. Ukoliko zakasnite više od 2 sata, naplaćuje se naredni dan.',
      },
      {
        question:
          'Izvršio sam rezervaciju ali nisam dobio mejl kojim je rezervacija potvrđena. Šta da radim?',
        answer:
          'Ako niste dobili potvrdu rezervacije molimo Vas pošaljite mejl na: offic@carbooking.me .',
      },
      {
        question: 'Da li moram vratiti vozilo sa punim rezervoarom?',
        answer:
          'Prilikom preuzimanja vozila na ugovoru je naznačena količina goriva pri predaji vozila, Dužni ste da priliko vraćanja vozila da vratite vozilo sa istom količinom goriva u rezervoaru. Ukoliko u vozilu pri vraćanju bude manje goriva biće Vam naplaćeno gorivo koje nedostaje po tržišnoj cijeni.',
      },
      {
        question: 'Koje vrste kartica prihvatate?',
        answer:
          'Prihvatamo krediste kartice Visa, MasterCard i American Express.',
      },
      {
        question: 'Da li mogu voziti van države?',
        answer:
          'Da, možete voziti van Crne Gore. Ova usluga će biti naplaćena, a potrebna je da se evidentira prije samog najma u suprotnom nećete moći preci granicu sa vozilom.',
      },
      {
        question: 'Šta je potrebno da bih preuzeo vozilo?',
        answer:
          'Važeću kreditnu karticu ili gotovinu.Vozačku dozvolu: Mora biti važeća i morate imati najmanje 2 godine iskustva u vožnji.',
      },
      {
        question: 'Šta da radim u slučaju saobraćajne nezgode?',
        answer:
          'U slučaju udesa, važno je da odmah pozovete policiju (broj policije je 122) i da o udesu obavijestite predstavnike CarBooking-a. U slučaju da Vi niste krivi za udes, obezbijedićemo Vam novo vozilo.Takođe, morate popuniti i potpisati sve papire koje dobijete od policije. Detalji o trećim licima koja su učestvovala u udesu takođe moraju biti dostavljeni zajedno sa fotografijama nezgode.',
      },
      {
        question: 'Šta ako vratim auto ranije?',
        answer:
          'Ako odlučite ili morate da vratite auto prije dogovorenog vremena refundiraćemo Vam novac.',
      },
      {
        question: 'Da li mogu da vozim po makadamu?',
        answer:
          'Ukoliko vozite van puta, sva osiguranja prestaju da važe. Svaka šteta nastala na vozilu u ovom slučaju biće Vam u potpunosti naplaćena.',
      },
      {
        question: 'Može li više od jedne osobe da upravlja vozilom?',
        answer:
          'Da, ali molim Vas navedite ime drugog vozača kada budete preuzimali vozilo. Ovo je važno kako zbog osiguranja, tako i u slučaju da Vas zaustavi policija.',
      },
      {
        question: 'Djeca i bezbjednost',
        answer:
          'U mnogim zemljama djeca ispod 135 cm visine moraju da sjede u dječijem sjedištu. Ova sjedišta možete dobiti u CarBooking besplatno, potrebno je da prilikom rezervacije naznačite da je potrebno sjedište za bebu.',
      },
      {
        question: 'Šta ako se izgubim?',
        answer:
          'Naša preporuka je da uzmete GPS navigaciju koja je takođe besplatna.',
      },
      {
        question: 'Kako ću dobiti fakturu?',
        answer:
          'Poslaćemo Vam fakturu email-om nakon vraćanja vozila. Ukoliko imate neke posebne zahtjeve, nemojte se ustručavati da nam ih saopštite i mi ćemo učiniti sve što je u našoj moći da Vam izađemo u susret.',
      },
      {
        question: 'Da li mi je potrebna vozačka dozvola?',
        answer:
          'Da, mi prihvatamo samo original važeće vozačke dozvole. Ne prihvatamo kopiju vozačke dozvole.',
      },
      {
        question: 'Mogu li produžiti najam dok je vozilo još uvijek kod mene?',
        answer:
          'Uglavnom da, ipak u sezoni se povremeno dešava da ćemo morati da odbijemo Vaš zahtjev ukoliko su drugi klijenti već napravili rezervaciju, a mi nemamo slobodnih vozila. U svakom slučaju, nazovite nas i provjerite da li je moguće produžiti rezervaciju.',
      },
    ],
  },
};

export const reservationpage = {
  en: {
    included: 'Included',
    insurance: 'Insurance',
    informations: 'Your Informations',
    reservationInformations: 'Reservation Informations',
    extras: 'Extras',
    totalPrice: 'Total Price',
    form: {
      fullName: 'Full Name',
      email: 'E-mail',
      years: 'Years',
      state: 'State',
      phoneNumber: 'Phone Number',
      message: 'Message',
    },
    nextStep: 'Next Step',
    prevStep: 'Previous Step',
    finish: 'Finish Reservation',
    thankyou: 'Reservation request sent successfully!',
  },
  sr: {
    included: 'Uključeno',
    insurance: 'Osiguranje',
    informations: 'Vaše Informacije',
    reservationInformations: 'Informacije Rezervacije',
    extras: 'Dodaci',
    totalPrice: 'Ukupna Cijena',
    form: {
      fullName: 'Ime i Prezime',
      email: 'E-mail',
      years: 'Broj Godina',
      state: 'Država',
      phoneNumber: 'Broj Telefona',
      message: 'Poruka',
    },
    nextStep: 'Idući Korak',
    prevStep: 'Prethodni Korak',
    finish: 'Završi Rezervaciju',
    thankyou: 'Zahtjev za rezervaciju je uspješno poslat!',
  },
};

export const extras = {
  en: {
    included: [
      {
        title: 'Casco insurance with participation in claims (CDW / TP)',
      },
      {
        title: 'Passenger Insurance (PAI)',
      },
      {
        title: 'Vehicle delivery',
      },
    ],
    insurance: [
      {
        name: 'wug',
        title:
          'Purchase of liability for damage to tires, chassis and glass (WUG)',
        paragraph: 'per day',
        price: 4.0,
        type: 'check',
      },
      {
        name: 'cdw',
        title: 'Redemption of liability for participation in damage (CDW +)',
        paragraph: 'per day',
        price: 6.0,
        type: 'check',
      },
    ],
    extras: [
      {
        name: 'drink',
        title: 'Welcome drink',
        gratis: true,
        type: 'check',
      },
      {
        name: 'additionalDriver',
        title: 'Additional driver',
        gratis: true,
        type: 'check',
      },
      {
        name: 'winterEquipment',
        title: 'Winter equipment',
        gratis: true,
        type: 'check',
      },
      {
        name: 'gps',
        title: 'GPS navigation',
        gratis: true,
        type: 'check',
      },
      {
        name: 'roofSuitcase',
        title: 'Roof suitcase',
        gratis: true,
        type: 'check',
      },
      {
        name: 'tireEquipment',
        title: 'Tire / mattress / tire pump',
        gratis: true,
        type: 'check',
      },
      {
        name: 'map',
        title: 'Paper map of Montenegro',
        gratis: true,
        type: 'check',
      },
      {
        name: 'umbrella',
        title: 'An umbrella',
        gratis: true,
        type: 'number',
      },
      {
        name: 'childSeat',
        title: 'Child seat',
        gratis: true,
        type: 'number',
      },
      {
        name: 'androidCharger',
        title: 'Charger for android',
        gratis: true,
        type: 'number',
      },
      {
        name: 'iphoneCharger',
        title: 'Charger for Iphone',
        gratis: true,
        type: 'number',
      },
      {
        name: 'router',
        title: 'Mifi 4g router',
        paragraph: 'per day, max',
        price: 5.0,
        maxPrice: 50.0,
        type: 'check',
      },
      {
        name: 'greenCard',
        title: 'Green card',
        paragraph: 'one-time',
        price: 30.0,
        type: 'check',
      },
      {
        name: 'scooter',
        title: 'Xiaomi Mi Electric Scooter Essential',
        paragraph: 'per day, max',
        price: 10.0,
        maxPrice: 150.0,
        type: 'check',
      },
      {
        name: 'bicycleHolder',
        title: 'Bicycle Car Holder',
        paragraph: 'per day, max',
        price: 5.0,
        maxPrice: 50.0,
        type: 'check',
      },
    ],
  },
  sr: {
    included: [
      {
        title: 'Kasko osiguranje sa učešćem u šteti (CDW/TP)',
      },
      {
        title: 'Osiguranje putnika (PAI)',
      },
      {
        title: 'Dostava vozila',
      },
    ],
    insurance: [
      {
        name: 'wug',
        title:
          'Otkup odgovornosti za štetu na gumama, podvozju i staklima (WUG)',
        paragraph: 'na dan',
        price: 4.0,
        type: 'check',
      },
      {
        name: 'cdw',
        title: 'Otkup odgovornosti prema učešću u šteti (CDW+)',
        paragraph: 'na dan',
        price: 6.0,
        type: 'check',
      },
    ],
    extras: [
      {
        name: 'drink',
        title: 'Osvježenje dobrodošlice',
        gratis: true,
        type: 'check',
      },
      {
        name: 'additionalDriver',
        title: 'Dodatni vozač',
        gratis: true,
        type: 'check',
      },
      {
        name: 'winterEquipment',
        title: 'Zimska oprema',
        gratis: true,
        type: 'check',
      },
      {
        name: 'gps',
        title: 'GPS navigacija',
        gratis: true,
        type: 'check',
      },
      {
        name: 'roofSuitcase',
        title: 'Krovni kofer',
        gratis: true,
        type: 'check',
      },
      {
        name: 'tireEquipment',
        title: 'Guma/dušek/pumpa za loptu',
        gratis: true,
        type: 'check',
      },
      {
        name: 'map',
        title: 'Papirna mapa Crne Gore',
        gratis: true,
        type: 'check',
      },
      {
        name: 'umbrella',
        title: 'Kišobran',
        gratis: true,
        type: 'number',
      },
      {
        name: 'childSeat',
        title: 'Dječije sjedište',
        gratis: true,
        type: 'number',
      },
      {
        name: 'androidCharger',
        title: 'Punjač za android',
        gratis: true,
        type: 'number',
      },
      {
        name: 'iphoneCharger',
        title: 'Punjač za Iphone',
        gratis: true,
        type: 'number',
      },
      {
        name: 'router',
        title: 'Mifi 4g ruter',
        paragraph: 'na dan, max',
        price: 5.0,
        maxPrice: 50.0,
        type: 'check',
      },
      {
        name: 'greenCard',
        title: 'Zeleni karton',
        paragraph: 'jednokratno',
        price: 30.0,
        type: 'check',
      },
      {
        name: 'scooter',
        title: 'Xiaomi Mi Električni trotinet',
        paragraph: 'na dan, max',
        price: 10.0,
        maxPrice: 150.0,
        type: 'check',
      },
      {
        name: 'bicycleHolder',
        title: 'Nosač za bicikla',
        paragraph: 'na dan, max',
        price: 5.0,
        maxPrice: 50.0,
        type: 'check',
      },
    ],
  },
};

export const contactpage = {
  en: {
    title: 'Contact Us',
    subject: 'Email Title',
    button: 'Send E-mail',
    thankyou:
      'Thank you for contacting us! We will soon get back to you through contact you provided.',
  },
  sr: {
    title: 'Kontaktirajte Nas',
    subject: 'Naslov E-maila',
    button: 'Pošalji E-mail',
    thankyou:
      'Hvala što ste nas kontaktirali! Uskoro ćemo Vam odgovoriti putem kontakata koje ste ostavili.',
  },
};
