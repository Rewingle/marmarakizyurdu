import React from 'react'
import { Box, Container, Flex } from 'theme-ui'
import wifi from 'assets/images/icons/wifi.png';
import study from 'assets/images/icons/office.png';
import security from 'assets/images/icons/security.png';
import cleaning from 'assets/images/icons/cleaning.png';
import iron from 'assets/images/icons/iron.png';
import shower from 'assets/images/icons/shower.png';
import breakfast from 'assets/images/icons/breakfast.png'
import reception from 'assets/images/icons/reception.png'
import chef from 'assets/images/icons/chef.png'
import repair from 'assets/images/icons/repair.png'
import Image from 'components/image';
import SectionHeading from 'components/section-heading';

function Hizmetler() {
    const hizmetler = [

        {
            icon: reception,
            name: 'Resepsiyon',
            desc: 'Öğrencilerimize ve ziyaretçilerimize 7/24 hizmet vermektedir. Resepsiyon personeli öğrenci ve ziyaretçi giriş-çıkışlarını kontrol eder, gelen postaları kabul eder, paket servis vb. hizmetlerde öğrenciye haber verilmesinde aracılık eder. Öğrencilerin, akademik yıl yurt giriş-çıkışlarında koordinasyonu sağlar.'
        },
        {
            icon: breakfast,
            name: 'Kahvaltı',
            desc: 'Öğrenci yurtlarında konaklama bedeline, haftanın 6 günü kahvaltı dahilder. Kahvaltı, 07:30 - 10:00 saatleri arasında kahvaltı salonunda verilmektedir.'
        },
        {
            icon: chef,
            name: 'Hobi mutfağı',
            desc: 'Hobi mutfağımız, ocak, tost makinesi, kettle bulunan, pratik yemeklerin yapılabileceği mutfaktır. Öğrenciler hobi mutfağından istedikleri zaman faydalanabilirler. Yemek pişirmek için gereken araç ve gereç, gerekli malzemeler öğrenci tarafından sağlanmaktadır. Kullanım esnasında ve sonrasında hobi mutfağının düzeni, öğrencilerin sorumluluğundadır. Hobi mutfağına araç ve gereçlerin dairelere götürülmesine izin verilmez.'
        },
        {
            icon: wifi,
            name: 'İnternet',
            desc: 'Tüm odalarımızda ve ortak alanlarımızda kotasız ve kesintisiz 7/24 yüksek hızlı internet hizmeti vermekteyiz.'
        },
        {
            icon: security,
            name: 'Güvenlik',
            desc: 'Giriş-çıkış kontrolünü sağlayan elektronik kartlı geçiş ve karekod tanıma sistemi mevcuttur. Kapalı devre TV kameraları ile 7/24 bina içi ve dışı kayıt altına alınmaktadır. Binalarda, ısı/duman algılayıcıları ile çalışan bir yangın alarm sistemi de bulunur.'
        },
        {
            icon: cleaning,
            name: 'Temizlik',
            desc: 'Öğrenci yurdumuzda oda temizliği, Yurt yönetimi tarafından belirlenen programa göre temizlik personelleri tarafından yapılır.'
        },
        {
            icon: shower,
            name: 'Isınma ve Sıcak Su',
            desc: 'Öğrenci yurdumuzda, 24 saat kesintisiz sıcak su bulunmaktadır. Kış döneminde merkezi kalorifer sistemiyle ısınma sağlanmaktadır.'
        },
        {
            icon: iron,
            name: 'Çamaşırhane(Ütü hizmeti)',
            desc: 'Çamaşırhane ve ütü hizmeti anlaşmalı olduğumuz kurum üzerinden ücretsiz olarak verilmektedir.'
        },
        {
            icon: repair,
            name: 'Teknik Servis',
            desc: 'Teknik servis ekibi, bina tesisatının koruyucu bakımını yapmakta ve bina içinde oluşabilecek günlük arıza onarım hizmeti vermektedir.'
        },
        {
            icon: study,
            name: 'Çalışma Alanları',
            desc: 'Geniş ve ferah konforlu çalışma alanları.'
        },

    ]

    return (
        <Box id="hizmetler" as="section" sx={styles.section}>
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Hizmetlerimiz"

                />
                {hizmetler.map((item) => (
                    <Box sx={styles.itemCard}>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                            <Image loading="lazy" src={item.icon} alt={item.name} />

                        </Box>
                        <Box sx={{ml:[2,null,null,null,null]}}>
                            <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                {item.name}
                            </Box>
                            <Box sx={{pr:2}}>{item.desc}</Box>
                        </Box>


                    </Box>
                ))}
            </Container>

        </Box>
    )
}

export default Hizmetler

const styles = {
    section: {
        pt: [30, null, null, null, 60],
        pb: [30, null, null, 50, 60],
    },
    heading: {
        textAlign: ['center', 'center', 'center', 'left'],
        marginLeft: 0,
        maxWidth: 580,
        m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
        h2: {
            fontSize: [22, 22, 22, 28, 30, 36, 46],
            lineHeight: [1.6, 1.6, 1.6, 1.41],
            fontWeight: [500, 500, 500, 400],
        },
        p: {
            fontSize: ['15px', '15px', '15px', '17px'],
            mt: [3, 3, 3, 20, 5],
        },
    },
    itemCard: {
        mt: 2,
        py: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 10fr',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '1em'
    }
}