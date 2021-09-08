<template>
    <div class="contact-wrapper border-top">
        <div class="contact-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 m-auto text-center" data-aos="fade-up">
                        <h2 class="title">Contact us for any further questions, possible projects & business partnerships</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-xl-10 m-auto">
                        <div class="contact-info-content">
                            <div class="info-item info-item2" data-aos="fade-up" data-aos-delay="300">
                                <div class="info-title">
                                    <h4>Contact Directly</h4>
                                    <div class="icon">
                                        <i class="icofont-envelope"></i>
                                    </div>
                                </div>
                                <div class="info-content">
                                    <a href="mailto://gatotprastyo@gmail.com">gatotprastyo@gmail.com</a>
                                    <br>
                                    <a href="tel:0123456789">0123456789</a>
                                </div>
                            </div>
                            <div class="info-item" data-aos="fade-up" data-aos-delay="600">
                                <div class="info-title">
                                    <h4>Visit our office</h4>
                                    <div class="icon">
                                        <i class="icofont-location-pin"></i>
                                    </div>
                                </div>
                                <div class="info-content">
                                    <p>Wisma Bisnis Indonesia</p>
                                </div>
                            </div>
                            <div class="info-item" data-aos="fade-up" data-aos-delay="900">
                                <div class="info-title">
                                    <h4>Work with us</h4>
                                    <div class="icon">
                                        <i class="icofont-briefcase"></i>
                                    </div>
                                </div>
                                <div class="info-content">
                                    <p>Send your CV to our email: <a href="mailto://gatotprastyo@gmail.com">gatotprastyo@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-xl-10 m-auto">
                        <div class="contact-form">
                            <div class="text-center" data-aos="fade-up">
                                <h2 class="title">Get In Touch</h2>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-map-area" data-aos="fade-up">
            <iframe src="https://maps.google.com/maps?q=graha%20arradea&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ContactForm: () => import('@/components/ContactForm'),
        },
    };
</script>
