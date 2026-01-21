import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata = {
    title: "Antep Fıstığı Onarıcı Tarım ve Aflatoksin Yönetimi | Vera Terra",
    description: "Antep fıstığında 'yok yılı' kader değil. Vera Terra ile verim kaybı riskini yönetin, aflatoksin limitlerini bilimsel yöntemlerle kontrol altına alın."
};

export default function AntepFistigiPage() {
    return (
        <div className="min-h-screen bg-[#FDF6E3] text-[#2B1D16] selection:bg-[#93C572] selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#D95D5D]/10 text-[#D95D5D] text-xs font-bold tracking-widest uppercase mb-6">
                            Ürüne Özel Çözümler: Antep Fıstığı
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-[#2B1D16]">
                            Antep Fıstığında <span className="text-[#D95D5D]">"Yok Yılı"</span> Kader Değil, Yönetilebilir Bir Süreçtir.
                        </h1>
                        <p className="text-lg text-[#2B1D16]/80 leading-relaxed mb-10 max-w-xl">
                            Atadan kalma bahçelerinizi, bilimsel toprak onarımı ve hassas zararlı yönetimi ile geleceğe taşıyoruz. Mevsimsel dalgalanmaları ve verim kaybı riskini yönetmeyi hedefleriz.
                        </p>

                        <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-[#D95D5D]/20 mb-8 max-w-lg">
                            <p className="text-[10px] text-[#D95D5D] font-bold uppercase tracking-widest leading-relaxed">
                                ⚠️ Kapsam Sınırı: Sonuçlar iklim koşullarına, başlangıç ölçümüne ve uygulama disiplinine bağlıdır.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/iletisim" className="px-8 py-4 bg-[#5F6F52] text-white font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                Bahçeniz İçin Keşif İsteyin
                            </Link>
                            <Link href="#" className="px-8 py-4 border-2 border-[#5F6F52] text-[#5F6F52] font-bold rounded-lg hover:bg-[#5F6F52]/5 transition-all text-center">
                                Örnek Aflatoksin Raporunu İnceleyin
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#93C572]/20 to-transparent rounded-2xl blur-2xl opacity-50 transition-opacity"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white shadow-2xl">
                            <Image
                                src="/assets/coiumler/antep_fistigi_hero.png"
                                alt="Dalında Antep Fıstığı - Onarıcı Tarım Uygulaması"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* KRİTİK TEHDİTLER - PROBLEM SECTION */}
            <section className="py-24 px-6 bg-[#2B1D16] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D95D5D]/5 skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl font-bold mb-6">Kritik Tehditler</h2>
                        <p className="text-xl opacity-70 leading-relaxed">
                            Fıstık üreticisinin karşı karşıya olduğu temel bariyerler ve onarıcı çözüm yaklaşımlarımız:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Aflatoksin */}
                        <div className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-[#D95D5D]/50 transition-all flex flex-col h-full">
                            <span className="text-xs font-mono text-[#D95D5D] mb-4">01_GIDA_GUVENLIGI</span>
                            <h3 className="text-xl font-bold mb-4">Aflatoksin Riski: Gıda Güvenliği ve İtibar Eşiği</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6 flex-grow">
                                İhracat pazarlarında en kritik bariyer olan bu toksin riski, sadece ekonomik bir kayıp değil, bir gıda güvenliği krizidir. Aspergillus tipi mantarların nem ve sıcaklık etkisiyle ürettiği aflatoksin, özellikle hasat öncesi doğru sulama yönetimi ve zamanında hasat ile yasal limitlerin altında tutulabilir.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <span className="text-[10px] font-bold text-[#93C572] uppercase tracking-wider block mb-1">Onarıcı Çözüm:</span>
                                <p className="text-xs italic opacity-90">Hasat öncesi nem yönetimi ve toprak sağlığı temelli önleyici yaklaşımlar.</p>
                            </div>
                        </div>

                        {/* 2. Karazenk */}
                        <div className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-[#93C572]/50 transition-all flex flex-col h-full">
                            <span className="text-xs font-mono text-[#93C572] mb-4">02_YAPRAK_SAGLIGI</span>
                            <h3 className="text-xl font-bold mb-4">Karazenk (Septoria): Yaprak Sağlığı ve Verim Sürekliliği</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6 flex-grow">
                                Halk arasında ağacın "küsemesi" olarak bilinen Karazenk (Septoria), yaprakların vaktinden önce dökülmesine neden olarak fotosentez döngüsünü kesintiye uğratır. Bu durum ağacın sadece o yılki verimini değil, bir sonraki yılın rezervlerini de tüketir.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <span className="text-[10px] font-bold text-[#93C572] uppercase tracking-wider block mb-1">Onarıcı Çözüm:</span>
                                <p className="text-xs italic opacity-90">Budama ile hava sirkülasyonunun artırılması ve bağışıklık sistemini destekleyen kültürel önlemler.</p>
                            </div>
                        </div>

                        {/* 3. Toprak Çölleşmesi */}
                        <div className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-amber-500/50 transition-all flex flex-col h-full">
                            <span className="text-xs font-mono text-amber-500 mb-4">03_TOPRAK_YAPISI</span>
                            <h3 className="text-xl font-bold mb-4">Toprak Çölleşmesi ve Agregat Kaybı</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6 flex-grow">
                                Yıllarca süren yoğun toprak işleme ve kontrolsüz girdi kullanımı, toprağın "yaşayan bir sünger" olma özelliğini yok eder. SOM (Toprak Organik Maddesi) tükendiğinde toprak betonlaşır; suyun infiltrasyon hızı düşer ve kök bölgesi yeterli oksijene ulaşamaz.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <span className="text-[10px] font-bold text-[#93C572] uppercase tracking-wider block mb-1">Onarıcı Çözüm:</span>
                                <p className="text-xs italic opacity-90">Örtü bitkileri ve minimum toprak işleme ile biyolojik yapının restorasyonu.</p>
                            </div>
                        </div>

                        {/* 4. Periyodisite */}
                        <div className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-blue-500/50 transition-all flex flex-col h-full">
                            <span className="text-xs font-mono text-blue-500 mb-4">04_VERIM_MAKASI</span>
                            <h3 className="text-xl font-bold mb-4">Periyodisite (Var - Yok Yılı) Makası</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6 flex-grow">
                                Üreticinin kaderi olarak görülen verim dalgalanması, aslında ağacın sınırlı kaynaklarla başa çıkma çabasıdır. Toprak altı mikrobiyal ağ (mikoriza) koptuğunda, ağaç besin kaynaklarını yönetemez. Onarıcı yöntemlerle verim arasındaki makas belirgin şekilde daraltılabilir.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <span className="text-[10px] font-bold text-[#93C572] uppercase tracking-wider block mb-1">Onarıcı Çözüm:</span>
                                <p className="text-xs italic opacity-90">Dengeli besleme yönetimi ve toprak mikrobiyolojisinin güçlendirilmesi.</p>
                            </div>
                        </div>

                        {/* 5. Kuraklık */}
                        <div className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-orange-500/50 transition-all flex flex-col h-full">
                            <span className="text-xs font-mono text-orange-500 mb-4">05_IKLIM_SOKU</span>
                            <h3 className="text-xl font-bold mb-4">Kuraklık ve Mikro-İklim Şoku</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6 flex-grow">
                                Artan kavurucu sıcaklar karşısında çıplak kalan toprak "pişer". Toprak yüzeyi örtüsüz bırakıldığında su hızla buharlaşır ve kök bölgesi aşırı ısınarak bitki metabolizmasını durma noktasına getirir. Bu bir susuzluk krizinden öte, bağışıklık sisteminin çöküşüdür.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <span className="text-[10px] font-bold text-[#93C572] uppercase tracking-wider block mb-1">Onarıcı Çözüm:</span>
                                <p className="text-xs italic opacity-90">Kaolin kili gibi doğal zırhlar ve toprağı güneşten koruyan örtü bitkileri.</p>
                            </div>
                        </div>

                        {/* 6. Ekosistem Sessizliği */}
                        <div className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-emerald-500/50 transition-all flex flex-col h-full">
                            <span className="text-xs font-mono text-emerald-500 mb-4">06_BIYOLOJIK_DENGE</span>
                            <h3 className="text-xl font-bold mb-4">Ekosistem Sessizliği: Tozlaşma ve Biyolojik Denge</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6 flex-grow">
                                Kontrolsüz pestisit kullanımı, bahçeyi koruyan "dost" böcekleri ve tozlayıcıları yok eder. Doğal denge bozulduğunda zararlılarla mücadele imkansızlaşır; bahçe dış müdahaleye mahkûm bir "hasta"ya dönüşür.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <span className="text-[10px] font-bold text-[#93C572] uppercase tracking-wider block mb-1">Onarıcı Çözüm:</span>
                                <p className="text-xs italic opacity-90">IPM (Entegre Zararlı Yönetimi) stratejileri ve faydalı böcek habitatlarının korunması.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 p-8 border-l-4 border-[#93C572] bg-[#93C572]/10 rounded-r-xl">
                        <p className="text-2xl font-medium italic opacity-90">
                            "Biz 'daha fazla ilaç atın' demiyoruz. Biz, karmaşık sorunlara, doğanın onarım gücünü temel alan bütüncül yanıtlar veriyoruz."
                        </p>
                    </div>
                </div>
            </section>

            {/* ÇÖZÜMLERİMİZ - REGENERATIVE APPROACH */}
            <section className="py-24 px-6 bg-[#FDF6E3]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-[#2B1D16] mb-4">Onarıcı Yaklaşımımız</h2>
                        <div className="w-24 h-1 bg-[#93C572] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Solution Cards */}
                        {[
                            { title: "Zararlıyı 'İzle', Hemen Vurma", desc: "Psillid veya diğer zararlılarda ekonomik zarar eşiğini bekleriz. Gerekirse kimyasal zehir yerine, ağacın üzerinde fiziksel bir kalkan oluşturan Kaolin Kili uygulamalarıyla güneş yanığını ve böcek baskısını azaltırız.", icon: "👁️" },
                            { title: "Toprağı Kışın da Besle", desc: "Ağaçlarınız kış uykusuna yattığında, biz toprağı beslemeye devam ederiz. Sıra aralarında fiğ ve yulaf karışımı örtü bitkileri ile toprağı erozyondan korur, baharda bunları yeşil gübre olarak toprağa geri veririz.", icon: "🌱" },
                            { title: "Eksik Elementleri Tamamla (Zn & B)", desc: "Fıstığın kalbi Çinko (Zn) ve Bor (B) elementleridir. Yaprak analizleri ile miligram hassasiyetinde eksikleri belirler, ağacın 'kan değerlerini' düzeltiriz.", icon: "🔬" },
                            { title: "Aflatoksin Yönetimi", desc: "Gıda güvenliği için en büyük risk olan toksin oluşumunu, erken hasat planlaması ve doğru kurutma teknikleri ile yönetiriz. Hasadın toprağa değmeden yapılması kırmızı çizgimizdir.", icon: "🛡️" },
                            { title: "Periyodisiteyi (Var-Yok Yılı) Hafifletme", desc: "Ağacın enerjisini sadece bu yıla değil, gelecek yıla da yetecek şekilde planlarız. Mikoriza ağlarını besleyerek, ağacın elementlere erişimini artırır ve 'boş yıl' sertliğini yumuşatırız.", icon: "🔋" },
                            { title: "Mikrobiyal Bağışıklık Hattı", desc: "Karazenk gibi mantar hastalıklarına karşı sadece ilaçla değil, 'biyolojik ordularla' savaşırız. Faydalı bakteri ve mantar preparatlarıyla ağacın bağışıklık sistemini uyarırız.", icon: "🦠" },
                            { title: "Yerinde Su Hasadı ve Malçlama", desc: "Kuraklığa karşı toprağı bir zırh gibi örteriz. Ağaç diplerinde bıraktığımız organik örtü (malç) sayesinde kısıtlı suyu doğrudan kök bölgesinde hapsederiz.", icon: "☁️" },
                            { title: "Ekosistemi Geri Çağırma", desc: "Pestisit baskısını azaltarak faydalı böceklerin bahçeye geri dönmesini sağlarız. Doğa kendi işini yapmaya başladığında, bahçe kendi kendini onaran bir ormana dönüşür.", icon: "🐝" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl group shadow-sm">
                                <div className="text-3xl p-4 bg-[#FDF6E3] rounded-xl h-fit group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-[#2B1D16]">{item.title}</h3>
                                    <p className="text-sm text-[#2B1D16]/70 leading-relaxed font-normal">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NASIL ÇALIŞIR - TIMELINE SECTION */}
            <section className="py-24 px-6 bg-white border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6 text-[#2B1D16]">Yıllık Uygulama Takvimi</h2>
                    <p className="text-center text-gray-500 mb-20">Sadece zamanı değil, ağacın ruh halini ve biyolojik ihtiyacını takip ediyoruz:</p>
                    <div className="space-y-16">
                        {[
                            {
                                season: "❄️ Kış",
                                period: "Dönem: Kış Uykusu (Dormansi)",
                                state: "Bitkinin Durumu: Ağaç enerjisini köklere çeker, dinlenmeye geçer.",
                                action: "Uygulama: Kış budaması ile ışık yönetimi, Bordo bulamacı ile hijyen ve toprağın zırhı olacak kışlık örtü bitkisi ekimi.",
                                color: "bg-blue-50 text-blue-700"
                            },
                            {
                                season: "🌸 Bahar",
                                period: "Dönem: Uyanış ve Çiçeklenme",
                                state: "Bitkinin Durumu: Gözler patlar, ağaç \"canlanır\" ve gelecek yılın gözlerini oluşturmaya başlar.",
                                action: "Uygulama: Psillid takibi, tozlaşma desteği, Çinko (Zn) ve Bor (B) ile çiçek sağlığı yönetimi. Toprak altı yaşamı hareketlendirecek sıvı organik uygulamalar.",
                                color: "bg-green-50 text-green-700"
                            },
                            {
                                season: "☀️ Yaz",
                                period: "Dönem: Meyve Gelişimi ve İç Doldurma",
                                state: "Bitkinin Durumu: Fıstık iç doldurmaya başlar, su ve besin ihtiyacı zirve yapar (En stresli dönem).",
                                action: "Uygulama: Kontrollü sulama, Karazenk kontrolü ve güneş yanığına karşı Kaolin Kili uygulaması. Bitkiyi serin tutacak yaprak uygulamaları.",
                                color: "bg-amber-50 text-amber-700"
                            },
                            {
                                season: "🍂 Sonbahar",
                                period: "Dönem: Olgunlaşma ve Hasat",
                                state: "Bitkinin Durumu: Meyveler olgunlaşır, ağaç bir sonraki yıl için rezerv biriktirmeye başlar.",
                                action: "Uygulama: Aflatoksin riskini sıfırlayan \"toprağa değmeyen\" hasat yönetimi. Hasat sonrası ağacı yorgun bırakmamak için \"teşekkür\" gübrelemesi.",
                                color: "bg-orange-50 text-orange-700"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm tracking-widest uppercase shadow-md transition-all group-hover:scale-110 ${item.color}`}>
                                        {item.season.split(' ')[1]}
                                    </div>
                                    {i < 3 && <div className="w-[2px] h-full bg-gray-100 my-4"></div>}
                                </div>
                                <div className="flex-1">
                                    <div className="p-8 bg-[#FDF6E3]/30 rounded-2xl border border-gray-100 group-hover:border-[#93C572]/30 transition-all group-hover:shadow-lg">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xl">{item.season.split(' ')[0]}</span>
                                            <h3 className="text-2xl font-bold text-[#2B1D16]">{item.season.split(' ')[1]}</h3>
                                            <span className="text-xs font-mono bg-white/50 px-2 py-1 rounded truncate opacity-60 ml-auto">{item.period}</span>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-sm font-semibold text-[#5F6F52] border-l-2 border-[#5F6F52] pl-3">{item.state}</p>
                                            <p className="text-base text-[#2B1D16]/80 leading-relaxed">{item.action}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIK SORULAN SORULAR */}
            <section className="py-24 px-6 bg-[#FDF6E3]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6 text-[#2B1D16]">Sıkça Sorulan Sorular</h2>
                    <p className="text-center text-gray-500 mb-16">Onarıcı Tarım & Antep Fıstığı Özel</p>
                    <div className="space-y-6">
                        {[
                            {
                                q: "1. Onarıcı tarım Antep fıstığında verimi düşürür mü?",
                                a: "Tam tersine. İlk geçiş yıllarında stabilizasyon beklense de, uzun vadede toprağın organik maddesi arttığı için \"yok yılı\" (periyodisite) etkisi azalır. Onarıcı tarım, ağacın sadece bu yıl değil, her yıl sürdürülebilir bir verim vermesini hedefler."
                            },
                            {
                                q: "2. \"Hiç kimyasal kullanmayacak mıyız?\"",
                                a: "Onarıcı tarım \"hiç\" değil, \"gerektiği kadar\" felsefesini savunur. Önce toprağın ve ağacın bağışıklığını güçlendiririz. Eğer biyolojik eşik aşılırsa, en az zararlı yöntemden başlayarak müdahale ederiz. Hedefimiz, zamanla kimyasala olan ihtiyacı minimuma indirmektir."
                            },
                            {
                                q: "3. Örtü bitkisi (ot) ekmek fıstığın suyunu çalmaz mı?",
                                a: "Geleneksel inanışın aksine, doğru örtü bitkisi karışımları toprağı bir sünger gibi yapar. Çıplak toprak güneşte pişip suyu buharlaştırırken, örtü bitkili toprak nemi hapseder ve kış yağışlarının yeraltına sızmasını sağlar. Yani otlar suyu çalmaz, toprağa saklar."
                            },
                            {
                                q: "4. Aflatoksin sorununu onarıcı tarım nasıl çözer?",
                                a: "Aflatoksin bir mantar (Aspergillus) sorunudur. Onarıcı tarımla toprakta faydalı mikroorganizma popülasyonunu artırarak zararlı mantarların baskın hale gelmesini engelleriz. Ayrıca doğru hasat ve kurutma disiplinimizle bu riski tarladan sofraya kadar yönetiriz."
                            },
                            {
                                q: "5. Karazenk ile mücadelede onarıcı yöntemler yeterli mi?",
                                a: "Evet. Karazenk ağacın zayıf düştüğü anı bekler. Bakır uygulamalarını, bitki bağışıklığını artıran deniz yosunu ve mikrobiyal gübrelerle destekleyerek yaprağın ağaçta kalma süresini uzatırız. Yaprak ne kadar geç dökülürse, ağaç o kadar güçlenir."
                            },
                            {
                                q: "6. Periyodisite (Var/Yok yılı) gerçekten önlenebilir mi?",
                                a: "Tamamen yok etmek genetik bir direnç gerektirse de, şiddetini %50-%70 oranında azaltmak mümkündür. Ağacın karbonhidrat dengesini ve toprak altı besin ağını doğru yönetirseniz, fıstık ağacınız \"yok\" yılında bile size gülümsemeye devam eder."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold mb-4 text-[#2B1D16]">{item.q}</h4>
                                <p className="text-[#2B1D16]/70 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 px-6 text-center bg-[#2B1D16] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#93C572_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12">Antep Fıstığı Bahçeniz İçin <span className="text-[#93C572]">Bilimsel Bir Temel</span> Atalım.</h2>
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        <Link href="/iletisim" className="px-12 py-5 bg-[#93C572] text-[#2B1D16] font-bold rounded-lg text-lg hover:shadow-[0_0_30px_rgba(147,197,114,0.4)] hover:-translate-y-1 transition-all">
                            Ücretsiz Saha Keşfi İsteyin
                        </Link>
                        <Link href="/cozumler" className="px-12 py-5 border-2 border-white/20 text-white font-bold rounded-lg text-lg hover:bg-white/5 transition-all">
                            Tüm Çözümleri İnceleyin
                        </Link>
                    </div>
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed border-t border-white/10 pt-8 italic">
                        ⚠️ Kapsam Sınırı: Sertifikasyon bir “garanti” değil; hazırlık ve uyum sürecidir. Başarı, üçüncü taraf denetimlerine tabidir.
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

