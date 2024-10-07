import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { DesktopDevComponent } from './components/desktop-dev/desktop-dev.component';
import { DigitalMarkComponent } from './components/digital-mark/digital-mark.component';
import { SEOComponent } from './components/seo/seo.component';
import { QAComponent } from './components/qa/qa.component';
import { WebDesComponent } from './components/web-des/web-des.component';
import { ECommerceSComponent } from './components/e-commerce-s/e-commerce-s.component';
import { UIUxComponent } from './components/ui-ux/ui-ux.component';
import { WebDevComponent } from './components/web-dev/web-dev.component';
import { DetailedBlogComponent } from './components/detailed-blog/detailed-blog.component';
// import { AddpostComponent } from './components/forms/addpost/addpost.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    { path: 'services', component: ServicesComponent },

    { path: 'contact', component: ContactComponent },

    { path: 'blogs', component: BlogComponent },

    { path: 'blogs/:id', component: DetailedBlogComponent },

    // { path: 'add-blog', component: AddpostComponent },



    // { path: 'blog/:subtitle', component: BlogComponent },

    { path: 'desktop-development', component: DesktopDevComponent },
    { path: 'digital-marketing', component: DigitalMarkComponent },
    { path: 'seo', component: SEOComponent },
    { path: 'qa', component: QAComponent },
    { path: 'web-design', component: WebDesComponent },
    { path: 'Ecommerce-solutions', component: ECommerceSComponent },
    { path: 'Rendering-UI-UX', component: UIUxComponent },
    { path: 'Web-development', component: WebDevComponent },





];
