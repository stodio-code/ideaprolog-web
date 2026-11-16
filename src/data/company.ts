/**
 * Data konten website PT Ideaprolog Indonesia.
 *
 * Sumber: ekspor WordPress lama `_migration_assets/ideaprolog.WordPress.2026-11-12.xml`
 * (halaman Home, Tentang Kami, Tim Kami, dan 10 halaman profil).
 * Ubah konten website cukup dari file ini.
 */

export type BusinessUnit = {
  slug: string;
  name: string;
  /** Deskripsi singkat dari bagian "unit bisnis" di halaman Home lama. */
  description: string;
  /** Judul ajakan dari bagian solusi di halaman Home lama. */
  solutionTitle: string;
  solutionDescription: string;
  url: string;
  /** Teks tautan yang tampil (tanpa protokol). */
  urlLabel: string;
  logo: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  photo: string;
  email?: string;
  linkedin?: string;
  /** Tautan profil lain (mis. halaman pengajar), bila tidak ada LinkedIn. */
  profileUrl?: string;
  /** Paragraf biografi dari halaman profil lama. */
  bio: string[];
  isLeadership?: boolean;
};

export type Activity = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const company = {
  name: "PT Ideaprolog Indonesia",
  shortName: "Ideaprolog",
  tagline: "Konsultan Pengadaan Barang/Jasa BUMN/BUMD",
  siteUrl: "https://ideaprolog.com",
  foundedYear: 2017,
  logo: {
    color: "/images/logo/ideaprolog-logo.png",
    white: "/images/logo/ideaprolog-logo-white.png",
    icon: "/images/logo/ideaprolog-icon.png",
  },
  hero: {
    title: "Partner Transformasi BUMN/BUMD",
    lead: "Setiap organisasi punya tantangan berbeda. Tapi semua punya harapan yang sama: bisa lebih efektif, transparan, dan berdampak.",
    body: "Di sinilah kami hadir bukan hanya memberi solusi, tapi membantu Anda menavigasi perubahan dan menemukan arah terbaik.",
  },
  cta: {
    title: "Masalah pengadaan Anda bukan yang pertama kami selesaikan.",
    highlight: "Tapi bisa jadi, ini yang terakhir Anda alami.",
    label: "Hubungi kami",
  },
  founderQuote: {
    text: "Ideaprolog bukan hanya sekedar lembaga pelatihan, bukan hanya sekedar aktivitas, namun suatu ide dan gagasan tentang dunia pengadaan yang ingin saya perjuangkan dengan keyakinan yang saya punya. Dengan konsep dan kultur berpikir yang ingin saya bangun sendiri dan dengan keyakinan bahwa dunia pengadaan kita akan berjalan semakin baik dan Ideaprolog dapat mengambil sedikit peran didalamnya.",
    author: "Nandang Sutisna",
    role: "Founder",
  },
  vision:
    "Visi kami adalah menjadi perusahaan dengan spesialisasi pengadaan yang terdepan di Indonesia.",
  mission:
    "Memberikan pelayanan pengadaan yang unik dan khas yang berorientasi pada solusi dan peningkatan kinerja pengadaan klien.",
  teamPhilosophy:
    "Filosofi kami sederhana; dimulai dari ide hebat, dilanjutkan dengan dedikasi, disempurnakan dengan pelayanan sepenuh hati.",
} as const;

/**
 * Kontak & alamat.
 *
 * `contactUrl` berasal dari tombol "Hubungi kami" di XML WordPress.
 * Alamat dan telepon diberikan langsung oleh pemilik (tidak ada di XML).
 * Kolom bernilai `null` tidak ditampilkan; isi untuk memunculkannya di footer.
 * Pakai "\n" di `address` untuk pindah baris.
 */
export const contact: {
  contactUrl: string;
  contactLabel: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  mapsUrl: string | null;
} = {
  contactUrl: "https://bit.ly/AdminIdeaprolog",
  contactLabel: "Chat Admin Ideaprolog",
  address:
    "Grha Ideaprolog\nJalan Bukit Cimanggu City Raya K1/40, Tanah Sareal, Kota Bogor",
  phone: "(0251) 8434058",
  email: "ideaprolog@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/kVB6RMSPGwXFxYas6",
};

export const businessUnits: BusinessUnit[] = [
  {
    slug: "idea-training-center",
    name: "Idea Training Center",
    description:
      "Kami menyediakan solusi pelatihan yang inovatif dan bersertifikat nasional untuk mengembangkan SDM supaya #JadiLebihAhli di bidangnya.",
    solutionTitle: "Raih Karir Profesional",
    solutionDescription:
      "Solusi pelatihan yang inovatif dan bersertifikat nasional untuk mengembangkan SDM supaya #JadiLebihAhli di bidangnya.",
    url: "https://ideatraining.co.id/",
    urlLabel: "ideatraining.co.id",
    logo: "/images/units/idea-training-center.png",
  },
  {
    slug: "vendoriza",
    name: "Vendoriza",
    description:
      "Kami membuat e-procurement sesuai dengan karakter BUMN/BUMD yang bertujuan untuk meningkatkan efisiensi dan menghasilkan profit.",
    solutionTitle: "Dapatkan e-Procurement yang Lebih Canggih",
    solutionDescription:
      "E-procurement sesuai karakter BUMN/BUMD. Dapatkan kemudahan untuk merumuskan strategi pengadaan dengan tepat.",
    url: "https://vendoriza.com/dashboard/login",
    urlLabel: "vendoriza.com",
    logo: "/images/units/vendoriza.png",
  },
  {
    slug: "idea-konsultindo",
    name: "Idea Konsultindo",
    description:
      "Kami memberi kontribusi nyata pada penciptaan tata nilai pengadaan yang baik melalui pengembangan strategi agar cepat, sederhana, bersih dan aman.",
    solutionTitle: "Dapatkan Strategi Pengadaan Terbaik",
    solutionDescription:
      "Pengembangan strategi dan tata cara pengadaan yang cepat, sederhana, bersih dan aman.",
    url: "https://ideakonsultindo.com/",
    urlLabel: "ideakonsultindo.com",
    logo: "/images/units/idea-konsultindo.png",
  },
  {
    slug: "ns-bookstore",
    name: "NS Bookstore",
    description:
      "Kami menyediakan kumpulan buku original pengadaan barang/jasa karya Dr. Ir. Nandang Sutisna, S.H., M.B.A. Temukan buku seputar pengadaan yang tepat di sini.",
    solutionTitle: "Dapatkan Buku Pengadaan Dari Ahlinya",
    solutionDescription:
      "Kumpulan buku original pengadaan barang/jasa, sekaligus wawasan dan diskusi daring bersama para pelaku pengadaan.",
    url: "https://pengadaan.co.id/",
    urlLabel: "pengadaan.co.id",
    logo: "/images/units/ns-bookstore.png",
  },
  {
    slug: "idea-justitia",
    name: "Idea Justitia Law Firm",
    description:
      "Kami membantu menyusun regulasi spesifik dan penanganan kasus pengadaan barang/jasa untuk organisasi Anda.",
    solutionTitle: "Dapatkan Solusi Hukum Dalam Pengadaan",
    solutionDescription:
      "Pelayanan hukum yang spesifik dan terarah: penyusunan regulasi dan penanganan kasus pengadaan barang/jasa.",
    url: "https://ideajustitia.com/",
    urlLabel: "ideajustitia.com",
    logo: "/images/units/idea-justitia.png",
  },
  {
    slug: "lsp-ideaprolog",
    name: "LSP Ideaprolog",
    description:
      "Kami mencetak SDM yang berkompeten di bidangnya sehingga memiliki skill yang profesional dan berdaya saing nasional dan internasional.",
    solutionTitle: "Sertifikasi Kompetensi Profesi",
    solutionDescription:
      "Mencetak SDM berkompeten dengan skill profesional yang berdaya saing nasional dan internasional.",
    url: "https://lsp.ideaprolog.com/",
    urlLabel: "lsp.ideaprolog.com",
    logo: "/images/units/lsp-ideaprolog.png",
  },
];

export const history = [
  {
    label: "Berawal dari sebuah pengalaman",
    title: "Sejarah Ideaprolog",
    text: "Nandang Sutisna sebagai founder sejak 2010 bekerja di LKPP sebagai penyusun regulasi dan kebijakan pengadaan barang/jasa pemerintah, namun banyak ditugaskan membantu BUMN/BUMD dalam menyusun Perdir dan SOP PBJ BUMN/BUMD.",
    image: "/images/kegiatan/presentasi-founder.png",
  },
  {
    label: "Menjadi yang pertama",
    title: "Menemukan peluang",
    text: "Saat itu belum terdapat lembaga atau perusahaan yang secara khusus memberikan layanan pengadaan BUMN/BUMD, BLU/BLUD dan Lembaga Semi Pemerintah dalam mengembangkan peraturan, SOP dan e-Procurement yang secara regulasi bersifat mandiri.",
    image: "/images/kegiatan/diskusi-klien.png",
  },
  {
    label: "Mengembangkan gagasan baru",
    title: "Co-Founder",
    text: "Bersama partner seorang praktisi dan ahli pengadaan dan pengembangan e-procurement, Rasiban, mereka mengembangkan gagasan bersama sehingga munculah sebuah ide hebat yaitu aplikasi e-procurement yang sesuai dengan karakter BUMN/BUMD.",
    image: "/images/kegiatan/founder-cofounder.png",
  },
  {
    label: "Terbentuklah Ideaprolog",
    title: "Titik balik",
    text: "Banyaknya konsultasi dari BUMD dan BLUD yang kesulitan mengatur pengadaannya sendiri karena kekurangan sumber daya manusia dan keahlian pengadaan barang/jasa. Maka dari itu terbentuklah Ideaprolog Indonesia pada tahun 2017 yang kemudian berkembang menjadi 3 perusahaan.",
    image: "/images/kegiatan/acara-tim.jpg",
  },
];

export const companies = [
  { name: "PT. Ideaprolog Indonesia", year: 2017 },
  { name: "PT. Ideakonsultindo Pratama", year: 2019 },
  { name: "PT. Idea Training Center", year: 2021 },
];

export const team: TeamMember[] = [
  {
    slug: "nandang-sutisna",
    name: "Dr. Ir. Nandang Sutisna, S.H., M.B.A.",
    role: "Founder/Direktur Utama",
    location: "Kota Bogor, Indonesia",
    photo: "/images/team/nandang-sutisna.png",
    email: "nandangsutisna@gmail.com",
    linkedin: "https://www.linkedin.com/in/nandang-sutisna-04822555",
    isLeadership: true,
    bio: [
      "Nandang Sutisna memiliki pengalaman bekerja sebagai seismic engineer pada proyek-proyek survei geofisika PT. Pertamina EP, menjadi peneliti dan asisten dosen di Jurusan Teknik Geologi ITB dan menjadi konsultan eksplorasi geosains di LAPI ITB. Karir sebagai geosaintis berakhir, ketika diterima sebagai PNS di Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) RI dan menjadi awal karir sebagai ahli pengadaan barang/jasa.",
      "Memiliki pengalaman lebih dari 100 kali penyusunan perundang-undangan dan regulasi terkait pengadaan barang/jasa diantaranya RUU Pengadaan Barang/Jasa Negara; RUU Perikatan; Perpres Pengadaan Barang/Jasa Pemerintah; Peraturan LKPP; Peraturan Menteri tentang Pengadaan Barang/Jasa; Peraturan Kapolri; Peraturan Gubernur, Bupati dan Walikota untuk pengadaan BUMD dan BLU; Peraturan Direksi BUMN, BUMD dan BLU; dan Peraturan KONI tentang Pengadaan Barang/Jasa.",
      "Pengalaman menjadi narasumber dan pembicara dalam ratusan acara seminar, bimbingan teknis, workshop, pertemuan ilmiah dan acara sejenis lainnya dengan lingkup tema pengadaan, manajemen konstruksi dan e-Procurement, baik di lembaga donor asing, instansi pemerintah, BUMN, BUMD, asosiasi profesi, perguruan tinggi dan lembaga sertifikasi nasional dan internasional. Selain itu juga memiliki pengalaman menjadi konsultan pengadaan barang/jasa dan agen pengadaan di Bank Indonesia, Instansi Pemerintah Pusat dan Daerah, Perguruan Tinggi, Perusahaan Swasta Nasional, BUMN dan BUMD.",
      "Menempuh dan menyelesaikan pendidikan tinggi pada Bidang Ilmu Teknik Geofisika, Teknik Geologi, Teknik Industri, Engineering Management, Manajemen Sistem Informasi, Hukum dan Administrasi Bisnis dari ITB, Universitas Atma Jaya Jakarta, Tanri Abeng University, University at Buffalo New York, IU Internasional Germany dan President University. Memiliki belasan sertifikasi dari BNSP, AAPM, PII, AFEO, ALI dan lembaga sertifikasi lainnya baik nasional maupun internasional.",
    ],
  },
  {
    slug: "rasiban",
    name: "Rasiban, S.Kom., M.Kom., CMT",
    role: "Co-Founder/Direktur Teknik",
    location: "Jakarta, Indonesia",
    photo: "/images/team/rasiban.png",
    email: "rasibantea@gmail.com",
    linkedin: "https://www.linkedin.com/in/rasiban-tea-b8234338",
    isLeadership: true,
    bio: [
      "Rasiban adalah Konsultan, Dosen, Master Trainer, Asesor Kompetensi dan Praktisi Bidang Pengembangan Perangkat Lunak dan Sistem Informasi dengan memulai karir pada tahun 1993 sebagai Engineer untuk Design Multimedia dan Pengujian Perangkat Keras Komputer di Info Asia Group dengan mengembangkan perangkat Multimedia di Perangkat Monitor Komputer sehingga Komputer tidak hanya sebagai perangkat yang membantu pekerjaan namun juga sebagai perangkat multimedia yang menjadi hiburan.",
      "Pada tahun 1997 mengembangkan sistem jaringan komputer dengan menghubungkan internet di Napan Group dan berkolaborasi dengan IBMnet memasyarakatkan Jaringan Telkomnet instan 08098888 yang diperuntukan untuk penggunaan jaringan telepon TELKOM untuk dapat menggunakan internet secara masif tanpa berlangganan internet ke Internet Service Provider (ISP)/ Penyelenggara Pelayanan Jaringan Internet.",
      "Pada tahun 2000 mengembangkan aplikasi e-auction Jalintrade berkolaborasi dengan Commerce One merupakan aplikasi pengadaan secara elektronik salah satu yang pertama di Indonesia yang menjadi jembatan penghubung dunia usaha antara pembeli dan penjual dan diimplementasikan pada PT. Telkom Indonesia serta di Lingkungan Badan Usaha Milik Negara.",
      "Memiliki pengalaman sebagai tim penyusunan Peraturan Direksi BUMN, BUMD dan BLUD; dan Peraturan KONI tentang Pengadaan Barang/Jasa. Pengalaman menjadi trainer dan asesor bimbingan teknis, workshop e-Procurement BUMN, BUMD, asosiasi profesi, perguruan tinggi dan lembaga sertifikasi nasional. Selain itu juga memiliki pengalaman menjadi konsultan pengadaan barang/jasa Perusahaan Swasta Nasional, BUMN dan BUMD.",
      "Menempuh dan menyelesaikan pendidikan tinggi pada Bidang Teknik Informatika dan Sistem Informasi dari ITB, Sekolah Tinggi Ilmu Komputer Erseha dan Universitas Pamulang. Memiliki belasan sertifikasi dari LKPP, BNSP dan lembaga sertifikasi lainnya.",
    ],
  },
  {
    slug: "mirza-silatama",
    name: "Mirza Silatama, S.Kom.",
    role: "Manajer Pengembangan e-Procurement",
    location: "Cileungsi, Kabupaten Bogor, Indonesia",
    photo: "/images/team/mirza-silatama.png",
    email: "mirza123@gmail.com",
    linkedin: "https://www.linkedin.com/in/mirza-r-silatama-09849b307",
    bio: [
      "Mirza Silatama adalah seorang profesional di bidang teknologi dan informasi, bertanggungjawab terhadap domain, hosting dan pengembangan aplikasi berbasis web internal perusahaan dan eksternal antara lain vendoriza.com, vendiriza.com, dan IPROCs di beberapa BUMD. Memiliki pengalaman sebagai Web Programmer di PT Central Sentosa Finance dalam pengembangan aplikasi internal Divisi HR (Human Resource) dan Divisi IT (Information Technology); Web Programmer di Raywhite Bogor untuk pembuatan website perusahaan; Web Programmer di PT Inersia Ampak Engineers dalam pengembangan aplikasi internal perusahaan.",
      "Memiliki pengalaman sebagai Administrator IT dan Desain Grafis di PT Inersia Ampak Engineers dalam mengelola akun perusahaan (SPSE, Domain, Hosting) dan pemeliharaan hardware software. Memiliki pengalaman sebagai Asisten Pelatihan IT di Kementerian Sosial RI pada kegiatan Survey dan Pembangunan Data Berbasis GIS untuk Perencanaan, Pendistribusian Bantuan. Memiliki pengalaman sebagai Asisten Pemrograman Database di Kementerian Keuangan pada kegiatan Pembuatan Sistem Informasi Akuntan, Akuntan Publik dan Kantor Akuntan Publik.",
    ],
  },
  {
    slug: "noki-mulyanto-amin",
    name: "Noki Mulyanto Amin, S.Kom.",
    role: "Manajer Pemeliharaan e-Procurement",
    location: "Jakarta, Indonesia",
    photo: "/images/team/noki-mulyanto-amin.png",
    email: "nokiamin123@gmail.com",
    linkedin: "https://www.linkedin.com/in/noki-mulyanto-59964156",
    bio: [
      "Noki Mulyanto Amin adalah seorang profesional di bidang teknologi dan informasi, bertanggungjawab pemeliharaan aplikasi berbasis web internal perusahaan dan eksternal antara lain vendoriza.com, vendiriza.com, dan IPROCs di beberapa BUMD.",
      "Memiliki pengalaman sebagai Tenaga Ahli Programmer di Dinas Pelayanan Pajak DKI Jakarta dalam mengembangkan aplikasi Pajak Online yang digunakan oleh wajib pajak untuk melaporkan pajak PKB (Pajak Kendaraan Bermotor), Hotel, Restoran, Hiburan, Parkir dan PBB (Pajak Bumi Bangunan). Pengalaman sebagai Tenaga Ahli Fullstack Developer di Diskominfo DKI Jakarta dalam membangun aplikasi e-PJLP (Penyedia Jasa Lainnya Perorangan) Pemprov DKI Jakarta terintegrasi dengan data Dukcapil untuk validasi NIK; pengembangan aplikasi e-Kinerja dan e-Order.",
      "Pengalaman sebagai Tenaga Ahli BPPBJ Pemprov DKI Jakarta dalam membangun aplikasi Elektronik Lelang yang terintegrasi dengan SPSE LKPP. Memiliki pengalaman sebagai Web Programmer di PT. Vitryanjaya Bintang Muda dalam merancang dan membangun website, CMS (Content Management System) dan e-Commerce sesuai kebutuhan client. Memiliki pengalaman sebagai IT Desktop Support di ACC (Astra Credit Company) yang bertanggungjawab melakukan pemeliharaan sistem komputer, software, pemeliharaan server, setup server dan jaringan.",
    ],
  },
  {
    slug: "saepul-rizal",
    name: "Saepul Rizal, S.Pd.I., M.M.",
    role: "Manajer Konsultan BUMD",
    location: "Kota Bogor, Indonesia",
    photo: "/images/team/saepul-rizal.png",
    email: "saepulalfa@gmail.com",
    linkedin: "https://www.linkedin.com/in/saepul-rizal-a88714135",
    bio: [
      "Saepul Rizal adalah ahli pengadaan barang/jasa dan manajemen SDM. Memiliki pengalaman bekerja sebagai Tenaga Pendamping Kelompok Tani pada LSM Yayasan Lebah Indonesia, Asisten Tenaga Ahli Konsultan Kajian pada proyek-proyek Kementerian Kehutanan dan Kementerian Transmigrasi di PT. Properindo Jasa Tama, menjadi konsultan surveyor pemetaan rupa bumi pada proyek Bakosurtanal/BIG di PT. Alfa Tersia Consultant berakhir, ketika diterima sebagai Karyawan Non PNS di Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) RI.",
      "Memiliki pengalaman lebih dari 40 kali penyusunan Peraturan Gubernur, Bupati dan Walikota untuk pengadaan BUMD dan BLU; Peraturan Direksi BUMN, BUMD dan BLU; dan Peraturan KONI tentang Pengadaan Barang/Jasa. Pengalaman menjadi narasumber instansi pemerintah dan BUMD. Selain itu juga memiliki pengalaman menjadi konsultan pengadaan barang/jasa dan agen pengadaan di Bank Indonesia, Instansi Pemerintah Pusat dan Daerah, BUMN dan BUMD. Menempuh dan menyelesaikan pendidikan tinggi pada Bidang Pendidikan dan Bidang Manajemen Sumber Daya Manusia. Memiliki sertifikasi Pengadaan Barang/Jasa Pemerintah LKPP dari BNSP.",
    ],
  },
  {
    slug: "erwin-syahroni",
    name: "Mohamad Erwin Syahroni, S.H.",
    role: "Manajer Konsultan BUMN",
    location: "Bogor, Indonesia",
    photo: "/images/team/erwin-syahroni.png",
    email: "mohersyah@gmail.com",
    linkedin: "https://www.linkedin.com/in/erwin-syahroni-29096418b",
    bio: [
      "M. Erwin Syahroni adalah ahli pengadaan barang/jasa dan advokat spesialis pengadaan barang/jasa. Memiliki pengalaman bekerja sebagai Karyawan Non PNS di Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) RI.",
      "Memiliki pengalaman lebih dari 40 kali penyusunan Peraturan Gubernur, Bupati dan Walikota untuk pengadaan BUMD dan BLU; Peraturan Direksi BUMN, BUMD dan BLU tentang Pengadaan Barang/Jasa. Pengalaman menjadi narasumber instansi pemerintah, BUMN dan BUMD. Selain itu juga memiliki pengalaman menjadi konsultan pengadaan barang/jasa Instansi Pemerintah Pusat dan Daerah, BUMN dan BUMD. Menempuh dan menyelesaikan pendidikan tinggi pada Bidang Hukum. Memiliki sertifikasi Pengadaan Barang/Jasa Pemerintah LKPP dari BNSP.",
    ],
  },
  {
    slug: "pietra-azwar",
    name: "Pietra Azwar, S.Kom.",
    role: "Manajer Umum",
    location: "Tangerang, Indonesia",
    photo: "/images/team/pietra-azwar.png",
    email: "pietra.azwar@gmail.com",
    // Halaman lama menautkan LinkedIn milik Mirza Silatama (salah tautan), jadi dikosongkan.
    bio: [
      "Pietra Azwar adalah seorang profesional di bidang Administrasi Keuangan yang berkomitmen untuk membantu perusahaan mencapai keberlanjutan finansial yang kuat.",
      "Berpengalaman dalam mengelola dan mengawasi aspek keuangan perusahaan, berkontribusi dalam mengoptimalkan pengeluaran, meningkatkan efisiensi, memastikan kelancaran operasi keuangan, bertanggung jawab atas pemantauan dan analisis harian laporan keuangan perusahaan, mengelola dan memastikan kelancaran proses pembayaran dan penerimaan, berperan dalam penyusunan anggaran tahunan dan proyeksi keuangan perusahaan, dan membantu dalam proses audit internal dan eksternal.",
      "Pernah bekerja sebagai Karyawan Non PNS di Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) pada bagian Administrasi Keuangan.",
    ],
  },
  {
    slug: "agung-dwijosasongko",
    name: "Agung Dwijosasongko, S.T., CDMS",
    role: "Manajer Pelatihan dan Sertifikasi",
    location: "Kota Bogor, Indonesia",
    photo: "/images/team/agung-dwijosasongko.png",
    email: "agungds@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/agung-dwijo-sasongko-s-t-cdmp-885a49205",
    bio: [
      "Agung Dwijosasongko adalah seorang ahli pengadaan barang/jasa dengan latar belakang teknik sipil dan Tim Konsultan di PT. Ideaprolog Indonesia.",
      "Menyelesaikan pendidikan Diploma 3 dan Sarjana Teknik Sipil dari Politeknik Negeri Jakarta dan Universitas Gadjah Mada. Agung memulai karirnya sebagai Tender Estimator di PT. Yasa Patria Perkasa, kemudian melanjutkan sebagai Quantity Surveyor. Memiliki pengalaman luas dalam berbagai proyek konstruksi dan pengadaan, mulai dari Site Manager di PT. Orchid Realty hingga Project Manajer di PT. Riscon Realty. Keahlian Agung dalam pengadaan diperkuat dengan sertifikasi dari LKPP dan BNSP dalam bidang Digital Marketing.",
      "Selain pengalaman kerja yang kuat, Agung juga aktif sebagai konsultan dalam penyusunan peraturan perusahaan dan SOP pengadaan barang/jasa di berbagai BUMD dan instansi pemerintah. Beberapa proyek konsultan yang telah ditanganinya antara lain penyusunan peraturan perusahaan di Perumda Dharma Jaya, revisi SOP pelelangan di Bank Aceh Syariah, serta penyusunan standar harga satuan di PDAM Tirta Kahuripan Kabupaten Bogor.",
    ],
  },
  {
    slug: "yofie-permana",
    name: "Yofie Permana, S.Kom.",
    role: "Manajer e-Procurement Analyst dan Katalog Elektronik",
    location: "Bogor, Indonesia",
    photo: "/images/team/yofie-permana.png",
    email: "yofie.permana@gmail.com",
    profileUrl: "https://ideatraining.co.id/teachers/yofie-permana-s-kom/",
    bio: [
      "Yofie Permana adalah ahli pengadaan barang/jasa sekaligus menjabat sebagai Sistem Analis Pengembangan Aplikasi iPROCs di PT Ideaprolog Indonesia. Memiliki pengalaman bekerja sebagai Karyawan Non PNS di Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) RI.",
      "Memiliki pengalaman dalam menganalisa kebutuhan pengembangan aplikasi pengadaan secara terintegrasi. Memberikan pelatihan dan pendampingan penggunaan aplikasi vendor management sistem (VMS) dan aplikasi pengadaan yang terintegrasi. Memiliki sertifikasi Pengadaan Barang/Jasa Pemerintah LKPP.",
    ],
  },
  {
    slug: "ibrahim-trihaji",
    name: "Ibrahim Trihaji, S.Si.",
    role: "Manajer Pemasaran",
    location: "Bogor, Indonesia",
    photo: "/images/team/ibrahim-trihaji.png",
    email: "ibrahimtrihaji1994@gmail.com",
    linkedin: "https://www.linkedin.com/in/ibrahim-trihaji",
    // Biografi di halaman lama belum diisi ("Ibrahim Trihaji adalah seorang .").
    bio: [],
  },
];

export const activities: Activity[] = [
  {
    src: "/images/kegiatan/pelatihan-pengadaan.jpg",
    alt: "Nandang Sutisna memaparkan materi pelatihan pengadaan",
    caption: "Pelatihan pengadaan barang/jasa",
    width: 2048,
    height: 1153,
  },
  {
    src: "/images/kegiatan/rapat-konsultasi.jpg",
    alt: "Tim Ideaprolog dalam rapat konsultasi bersama klien",
    caption: "Rapat konsultasi bersama klien",
    width: 1280,
    height: 720,
  },
  {
    src: "/images/kegiatan/diskusi-klien.png",
    alt: "Diskusi pendampingan pengadaan bersama klien",
    caption: "Diskusi pendampingan klien",
    width: 720,
    height: 480,
  },
  {
    src: "/images/kegiatan/presentasi-founder.png",
    alt: "Presentasi tentang prosedur kerja sama pengadaan",
    caption: "Presentasi prosedur kerja sama",
    width: 720,
    height: 480,
  },
  {
    src: "/images/kegiatan/kebersamaan-tim.jpg",
    alt: "Kebersamaan tim Ideaprolog",
    caption: "Kebersamaan tim Ideaprolog",
    width: 1280,
    height: 720,
  },
  {
    src: "/images/kegiatan/acara-tim.jpg",
    alt: "Tim Ideaprolog berfoto bersama dalam sebuah acara",
    caption: "Menghadiri acara bersama mitra",
    width: 960,
    height: 1280,
  },
];

export const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/tim-kami", label: "Tim Kami" },
] as const;
