import React, { useState } from 'react'
import { Box, Container, Grid, Button } from 'theme-ui'
import Link from 'next/link'

function Basvurular() {

    const tabs = [
        {
            index: 0,
            line1: 'KOSUL VE',
            line2: 'BELGE'
        },
        {
            index: 1,
            line1: 'ÜCRETLER',
            line2: 'DEPOZITO'
        },
        {
            index: 2,
            line1: 'DEPOZITO',
            line2: 'IADE'

        },
        {
            index: 3,
            line1: 'BASVURU'
        }
    ]
    const [selectedTab, setSelectedTab] = useState(0)

    const TabSwitcher = ({ tab }) => {
        switch (tab) {
            case 0:
                return (
                    <Box>
                        <h3>Yurt kaydını yenilemek isteyen öğrencilerin başvuruları:</h3>
                        <p>Başvuru tarihi 15 Haziran-30 Haziran tarihleri arasıdır. Başvurusu olumlu sonuçlanan öğrenciler,
                            yeni
                            akademik yıl için belirlenen konaklama bedelinin %25'ini kapora olarak Haziran ayı sonuna
                            kadar ödemekle
                            yükümlüdürler. Kalan ödeme, akademik yıl başlangıcında havale veya anlaşmalı bankalardan
                            kredi kartına
                            taksitlendirme ile yapılabilir.
                            Yeni öğrenci kayıtları başlayana kadar başvurusunu iptal eden öğrencilerin depozitoları iade
                            edilir, kaparo
                            tutarı için ise Yükseköğrenim Özel Barınma Hizmetleri Yönetmeliği’ndeki şartlar geçerlidir.</p>
                        <h4>Öğrenci Yurduna Yeni Başvuran Öğrencilerden İstenen Belgeler:</h4>
                        <ul>
                            <li>Başvuru formu için tıklayınız.</li>
                            <li>Aşağıdaki belgelerin programa yüklenmesi ve programda bulunan belgelerin imzalanması,</li>
                            <li>Öğrenci Yurdu konaklama bedeli dekontu ve depozito dekontu, ( Dekontların açıklama kısmına başvuru yapan öğrencilerin isimleri ve
                                T.C numaraları yazılmalıdır.)</li>
                            <li>Nüfus cüzdanı,</li>
                            <li>Öğrenci belgesi,</li>
                            <li>Adli sicil ve Arşiv kaydı belgesi,</li>
                            <li>Yabancı uyruklu öğrenciler; öğrenci belgesi, pasaport, kuruma kayıt tarihinden itibaren üç ay içinde ilgili kurum ve kuruluşlardan alınmış
                                ikamet izin belgesini ibraz etmek zorundadırlar.</li>
                            <li>İkametgâh belgesi,</li>
                            <li>4 adet vesikalık fotoğraf, (Son 6 ay içinde çekilmiş fotoğraf olmalıdır. Biyometrik fotoğraf kabul edilmemektedir. Resimler elden teslim
                                edilecektir. Elden teslim edilen fotoğrafın aynısı sisteme eklenmek zorundadır.)</li>
                            <li>Toplu yerlerde yaşamaya engel olacak seviyede akıl ve ruh hastalığı veya bulaşıcı hastalığı olmadığına daire yazılı beyanda bulunmak,</li>

                        </ul>
                        <h3>Öğrenci yurdu için 15 Haziran - 30 Haziran tarihleri arasında kaydını yenileyen ve yeni kayıt yaptıran öğrenciler için
                            başvuru iptali;
                        </h3>
                        <p>Üniversitenin yeni öğrenci kayıtları başlayana kadar başvurusunu iptal eden öğrencilerin depozitoları iade edilir, kapora tutarı ise
                            iade edilmez.</p>
                    </Box>
                )
            case 1:
                return (
                    <Box>
                        <h3>Ücretler</h3>
                        <p> Öğrenci yurdunda kalmak için sözleşme yapılır. Sözleşme, akademik yılı kapsar.
                            (Akademik takvimleri kapsamında final sınav dönemlerinde farklılık olması halinde
                            sadece ilgili bölüm/program öğrencilerinin konaklama hakkı saklıdır.)
                            Sözleşme yaz dönemini ve yaz okulunu kapsamamaktadır.
                            Konaklama bedeli eğitim/öğretim başlangıç tarihinden 2 ( iki ) gün önce başlar 30
                            Haziran son bulur. Yurt burslu öğrencilerin yurtlardan son çıkış tarihi, sınıflarının final
                            sınavlarından sonraki 2 ( iki ) gündür.</p>
                        <p>Ödeme Yöntemleri:
                            İnternetten Havale /EFT, Kredi Kartı veya Peşin Ödeme ile yapılır.

                            Dekont açıklamasına öğrencinin T.C. Kimlik Numarası ve Ad Soyad bilgisi
                            yazılmalıdır.</p>
                        <h3>e-ödeme yöntemi ile ödeme yapabilmek için</h3>
                        <ul>
                            <li>T.C. Kimlik Numarası ve Doğum Tarihi alanlarını doldurup, GİRİŞ'e tıklayınız,</li>
                            <li>Ekranda gözüken borcunu ödemek için ÖDEME YAP'a tıklayınız</li>
                            <li>Kredi Kartı Bilgilerinizi doldurunuz; Kart Sahibinin Adı Soyadı, Kredi kartı numarası, Son geçerlilik tarihi,
                                CVC no (kartın arkasındaki güvenlik kodu)</li>
                            <li>Taksit seçeneğinden peşin, 3 taksit 6 taksit ve 9 taksit seçeneklerinden birini seçiniz,</li>
                            <li>3D Secure Kullan ve Hizmet Sözleşmesini Okudum Kabul ettim alanlarının kutucukları tıklanmalı,</li>
                            <li>Ödeme yapmak istenilen tutar girilmeli, (Taksitli işlemlerde vade farkı ile ödenmesi gereken tutar
                                görülmekte)</li>
                            <li>Banka tarafından gönderilen GÜVENLİK şifresi girilerek, TAMAM tıklanmalı ve süreç tamamlanmalı.</li>
                        </ul>
                        <p>
                            Taksitli işlemlerde vade farkı uygulanmaktadır. Bankaların + taksit olanakları ve vade
                            farkı oranları değişkendir. Bankalar dönemsel olarak + taksit imkanlarını ve vade farkı
                            oranlarını artırma ve azaltma hakkına sahiptir.
                            Bankalar + taksit imkanlarını, kayıt tarihlerinde duyurmaktadır.
                            Taksit imkânları kartların özellikli durumlarına göre değişmekte, ticari kartlara + taksit
                            imkânı banka tarafından sunulmamaktadır. Taksitli işlemlerin gerçekleşmemesi
                            durumunda ve vade farkı oranları hakkında bilgi almak için yurdumuz Mali İşleri
                            birimini arayarak detaylı bilgi alabilirsiniz.
                        </p>
                        <h3>Depozito</h3>
                        <p>Öğrenci yurda kesin kayıt esnasında depozitonun ödenmiş olması gerekmektedir. Depozito, bir defaya mahsus alınır. Depozito
                            dekontu, öğrenci yurdu konaklama bedeli dekontundan ayrı olacaktır. Dekontların açıklama kısmına başvuru yapan öğrencilerin
                            isimleri ve TC numaraları yazılmalıdır. Öğrenciler, yaşadıkları dairelerdeki/odalardaki demirbaş eşyalarda oluşacak hasarlardan
                            sorumludur. Oluşan hasarı ödemekle yükümlüdür. Binaya ilk girişte oda teslim formunun eksiksiz doldurulup teslim edilmesi,
                            daha sonra oluşabilecek hasar ve kesintilere temel teşkil edeceğinden önemlidir.
                            Hesap Numaraları
                            Özel Marmara Yükseköğrenim Kız Öğrenci Yurdu, Halk Bankası Moda Kurumsal Şubesi hesaplarına yapılır</p>

                    </Box>

                )
            case 2:
                return (
                    <Box>
                        <p>
                            Öğrenci yurttan kesin olarak ayrılanlara depozito iade süreci, odanın tamamen boşaltılıp anahtar teslimini takiben oda kontrolü
                            sonrasında başlar. Bu aşamada öğrencinin depozito iade formunu ya da aşağıdaki formu doldurup
                            info@marmarakizogrenciyurdu.com öğrenci yurdunun mail adresine yollamış olması ya da resepsiyona elden teslim etmiş olması
                            gerekir.
                            Yurtta kalan öğrenciler yurtların yönetiminden teslim aldığı bütün eşya ve malzemeden sorumludur. Yurttan ayrılırken teslim aldığı
                            tüm malzemeyi öğrenci yurdunun yönetimine eksiksiz ve hasarsız olarak teslim etmekle yükümlüdür.
                            Binaya ilk girişte oda teslim formunun eksiksiz doldurulup teslim edilmesi, daha sonra oluşabilecek hasar ve kesintilere temel
                            teşkil edeceğinden önemlidir.
                            Kullanım hatasından kaynaklanan hasarların bedeli öğrenciden tahsil edilir. Zimmetlerinde bulunan eksik malzemelerin bedelini
                            ödemekle yükümlüdürler. Öğrenci yurdunda sebep olunan hasarın karşılığı ödeme günündeki maliyet üzerinden hasar verenden
                            tahsil edilir. Ortak kullanıma sunulan öğrenci yurt eşyalarının tahribi veya kaybı halinde, sorumlusu bulunamadığı takdirde bedeli
                            ortak kullananlardan tahsil edilir. Bir sonraki öğretim yılı için öğrenci yurduna başvurusu yapmış öğrenciler depozito iadesi
                            alamazlar.
                            Öğrenci kaldığı oda ve eşyasına hasar vermiş ise, hasar bedeli düşüldükten sonra kalan depozito tutarı, hasar verilmemiş ise
                            depozitonun tamamı öğrencinin bildirmiş olduğu çıkış tarihinden sonraki 30 (otuz) gün içinde iade edilir.
                        </p>
                        <Box sx={{ display: 'flex' }}>
                            <p>Depozito İade Formunu indirmek için </p>
                            <a style={{ marginLeft: '8px',marginTop:'16px' }} href='src/assets/marmara-kiz-ogrenci-yurdu-depozito-iade-formu.docx' download>tıklayınız</a>

                        </Box>
                    </Box>
                )
            case 3:
                return (
                    <Box sx={{ display: 'flex' }}>
                        <Box>ÖZEL MARMARA KIZ ÖĞRENCİ YURDU BAŞVURUSU İÇİN</Box><Box><Link href='/basvur'>tıklayınız</Link><Box></Box></Box>
                    </Box>
                )
            default:
                return <Box>
                    <h4>Öğrenci Yurduna Yeni Başvuran Öğrencilerden İstenen Belgeler:</h4>
                    <ul>
                        <li>Başvuru formu için tıklayınız.</li>
                        <li>Aşağıdaki belgelerin programa yüklenmesi ve programda bulunan belgelerin imzalanması,</li>
                        <li>Öğrenci Yurdu konaklama bedeli dekontu ve depozito dekontu, ( Dekontların açıklama kısmına başvuru yapan öğrencilerin isimleri ve
                            T.C numaraları yazılmalıdır.)</li>
                        <li>Nüfus cüzdanı,</li>
                        <li>Öğrenci belgesi,</li>
                        <li>Adli sicil ve Arşiv kaydı belgesi,</li>
                        <li>Yabancı uyruklu öğrenciler; öğrenci belgesi, pasaport, kuruma kayıt tarihinden itibaren üç ay içinde ilgili kurum ve kuruluşlardan alınmış
                            ikamet izin belgesini ibraz etmek zorundadırlar.</li>
                        <li>İkametgâh belgesi,</li>
                        <li>4 adet vesikalık fotoğraf, (Son 6 ay içinde çekilmiş fotoğraf olmalıdır. Biyometrik fotoğraf kabul edilmemektedir. Resimler elden teslim
                            edilecektir. Elden teslim edilen fotoğrafın aynısı sisteme eklenmek zorundadır.)</li>
                        <li>Toplu yerlerde yaşamaya engel olacak seviyede akıl ve ruh hastalığı veya bulaşıcı hastalığı olmadığına daire yazılı beyanda bulunmak,</li>

                    </ul>
                </Box>
        }
    }

    return (
        <Box id='basvurular' as='section' sx={styles.section}>
            <Container sx={{ width: '100%', justifyContent: 'center', borderRadius: '1em' }}>
                <Grid sx={{ display: 'flex', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: [null, null, null, '4em', '4em'], borderBottom: '4px solid #8D448B',fontFamily:'Helvetica' }}>
                    {tabs?.map((tab) => (
                        <>
                            {selectedTab == tab.index ? <Button onClick={() => setSelectedTab(tab.index)} sx={styles.button}>
                                {tab.line1}<br />{tab.line2}
                            </Button> : <Button onClick={() => setSelectedTab(tab.index)} variant="muted" sx={styles.button}>
                                {tab.line1}<br />{tab.line2}
                            </Button>}
                        </>
                    ))}
                </Grid>
                <br />
                <TabSwitcher tab={selectedTab} />

            </Container>

        </Box >
    )
}

export default Basvurular;

const styles = {
    section: {
        pt: [30, 30, 6],
        pb: [50, 50, 50, 100, 8, 9],
    },
    button: {


        minWidth: ['5em', '3em', '3em', '3em', '3em'],
        fontSize: [14, 14, 16],
        width: '100%',
        p: 2,
        fontWeight: 600,
        svg: {
            transition: 'margin-left 0.3s ease-in-out 0s',
        },
        ':hover': {
            svg: {
                ml: '5px',
            },
        },
    }
}