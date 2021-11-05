import image from 'next/image'
import React from 'react'
import styles from 'styles/Footer.module.scss'
import Image from 'next/image'
const FooterHead = () =>{

    return(
        <div>
            <div className={"flex  m-12 md:m-20 flex-col md:flex-row md:mt-40 md:mb-40"}>
                <div className="flex-auto flex-row">
                    <div className="flex-auto">
                    <p className={styles.MonstserratPurple +" text-left pb-3"}>Sponsors</p>
                    <div className="grid grid-cols-2 gap-2  sm:flex sm:space-x-14">
                        <div >
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Copy%20of%20Orange_Vertical_Shopee_Logo%20%282%29.png" alt="sponsor" width={112} height={160}/>
                        </div>
                        <div >
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Logo%20Hangry%20%284%29.png" alt="sponsor" width={160} height={160}/>
                        </div>
                        <div >
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/CODEPOLITAN.png" alt="sponsor" width={160} height={156}/>
                        </div>
                        <div >
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/Paragon%20Logo.png" alt="sponsor" width={523} height={90}/>
                        </div>


                        
                    </div>
                    
                    </div>
                    <div className="flex-auto">
                    <p className={styles.MonstserratPurple +" text-left pb-3"}>Media Partners</p>
                    <div className="grid grid-cols-3 gap-2 md:flex md:space-x-6">
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/Logo%20LT.png" alt="sponsor" width={75} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/logoinfoeventjatim.png" alt="sponsor" width={122} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/BEM%20FK%20Undip.png" alt="sponsor" width={75} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/eventevent_-removebg-preview.png" alt="sponsor" width={75} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/IEEE%20ITB%20SB%20LOGO%20-%20Black%20%281%29.png" alt="sponsor" width={225} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/LOGO%20LOMBABISNIS.png" alt="sponsor" width={85} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/eventpelajar.png" alt="sponsor" width={317} height={75}/>
                        </div>
                        <div>
                            <Image src="https://bowo-testing.sgp1.cdn.digitaloceanspaces.com/BistLeague/MedPar/itbreceh.png" alt="sponsor" width={75} height={75}/>
                        </div>
                        
                        

                    </div>
                    
                    </div>
                </div>
                {/* <div className="flex-auto">
                <p className={styles.MonstserratPurple +" text-left sm:text-right"}>Community Partners</p>
                    <div className="flex sm:justify-end space-x-4">
                    <div>
                        <Image src="/images/blank.png" alt="sponsor" width={112} height={112}/>
                    </div>
                    <div>
                        <Image src="/images/Logo_STI1.png" alt="sponsor" width={99} height={122}/>
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default FooterHead;