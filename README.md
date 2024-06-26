## Demo
[E-Commerce Template Demo](https://commerce-template-eb.netlify.app/)

# Commerce Template

Bu proje, bir e-ticaret web sitesi tasarımıdır. Aşağıda proje ile ilgili kurulum ve kullanım talimatlarını bulabilirsiniz.

## Başlangıç

Projeyi çalıştırmak için aşağıdaki adımları takip edin.

### Gereksinimler

- Node.js (v14 veya üstü)
- npm (v6 veya üstü) veya yarn

### Kurulum

Projeyi klonladıktan sonra gerekli paketleri yüklemek için aşağıdaki komutu çalıştırın:

```bash
npm install
```

### Geliştirme Sunucusu

Projeyi geliştirme ortamında çalıştırmak için aşağıdaki komutları kullanabilirsiniz:

#### Tailwind CSS İzleme

```bash
npm run tailwind
```

Bu komut, Tailwind CSS'i izleyerek değişiklikleri otomatik olarak `./src/assets/css/style.css` dosyasına uygular.

#### Gulp ile Çalıştırma

```bash
gulp
```

Bu komut, Gulp kullanarak proje dosyalarınızı izler ve gerekli işlemleri (minimizasyon, derleme vb.) gerçekleştirir.

### Yapı

Projenin üretim için derlenmiş halini oluşturmak için gerekli komutlar ve adımlar burada belirtilmelidir. (Örneğin gulp kullanarak minimizasyon işlemleri vb.)

## Kullanılan Teknolojiler ve Kitaplıklar

### Bağımlılıklar (dependencies)

- **@nextui-org/react**: ^2.4.2
- **bootstrap**: ^5.3.3
- **gulp-file-include**: ^2.3.0
- **gulp-htmlmin**: ^5.0.1
- **gulp-less**: ^5.0.0

### Geliştirme Bağımlılıkları (devDependencies)

- **autoprefixer**: ^10.4.16
- **browser-sync**: ^2.27.11
- **gulp**: ^4.0.2
- **gulp-data**: ^1.3.1
- **gulp-if**: ^3.0.0
- **gulp-image**: ^6.3.1
- **gulp-imagemin**: ^8.0.0
- **gulp-jsonminify**: ^1.1.0
- **gulp-uglify**: ^3.0.2
- **postcss-cli**: ^10.1.0
- **tailwindcss**: ^3.4.4

## Katkıda Bulunma

Katkıda bulunmak isterseniz lütfen bir pull request açın. Herhangi bir sorunuz veya öneriniz varsa, issue açmaktan çekinmeyin.

## Lisans

Bu proje [ISC Lisansı](LICENSE) ile lisanslanmıştır.
