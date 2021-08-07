import React from 'react';

import HowBuild from "../../components/HowBuild/HowBuild";
import WeDo from "../../components/WeDo/WeDo";
import WhyWe from "../../components/WhyWe/WhyWe";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import NewsMini from "../../components/NewsMini/NewsMini";
import home1Img from '../../assets/Home/home1.jpg';
import home2Img from '../../assets/Home/home2.jpg';
import home3Img from '../../assets/Home/home3.jpg';


const Home = () => {
    const testNews = [
        {
            id: 1,
            img: home1Img,
            date: '24.02.2021',
            title: 'Каркас возведен',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis sapien eget sem vulputate, at elementum nisi ultrices. Aenean et sollicitudin metus, ut interdum augue. Etiam in sapien vel felis sagittis lobortis. Donec nulla nibh, dictum vitae aliquet in, pulvinar eget lacus. Nunc hendrerit sapien ut ex volutpat, in ornare sapien vulputate. Nulla varius tellus odio. Donec non eros consectetur, pharetra augue quis, lacinia arcu. Ut finibus, massa a fermentum sodales, augue elit euismod purus, ut porta libero diam non purus. Praesent gravida egestas diam at vehicula. Nam vulputate augue turpis, et sagittis augue imperdiet vitae. Phasellus eu augue et tellus gravida viverra at in elit.\n' +
                '\n' +
                'Sed bibendum a massa condimentum aliquam. Pellentesque suscipit mattis libero nec tincidunt. In non enim ante. Vestibulum ex odio, rhoncus ut gravida nec, malesuada vitae ligula. Mauris molestie enim eget orci malesuada, quis commodo libero lobortis. Morbi semper, quam sed convallis pharetra, dui nisi fermentum eros, eget sollicitudin justo velit sed sapien. Sed varius elit feugiat fringilla luctus. In hac habitasse platea dictumst. Duis ornare tempus augue, nec sollicitudin mauris ultricies nec. Morbi a scelerisque est.\n' +
                '\n' +
                'Integer facilisis leo diam. Integer ac nisl eget augue tempus laoreet a non elit. Pellentesque at purus ligula. Ut ut porttitor sem. Fusce sit amet accumsan eros. Praesent quis posuere purus. Proin eleifend luctus dui, euismod luctus libero rhoncus mattis. Mauris finibus turpis dolor, eget aliquet erat pulvinar nec. Maecenas ac ex eu tortor sagittis malesuada. Nulla id faucibus nunc, ultricies malesuada ex. Pellentesque sed risus ipsum. Integer facilisis ullamcorper enim. Fusce feugiat erat sit amet neque tincidunt faucibus. Donec id libero vitae orci ullamcorper aliquam.\n' +
                '\n' +
                'Praesent pellentesque mi nibh, nec accumsan erat ultrices sed. Morbi sed arcu dolor. Maecenas hendrerit arcu quam, nec eleifend tortor mollis sit amet. Nullam aliquam augue id finibus accumsan. Aenean eget ligula in ante bibendum tristique. Nulla euismod consequat enim a egestas. Donec ut quam fringilla, malesuada sapien vitae, aliquam sapien. In porta risus eget elementum gravida. Cras quis ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate vestibulum lobortis.\n' +
                '\n' +
                'Quisque eget pretium leo. Pellentesque sit amet malesuada neque. Morbi egestas, risus at rhoncus consectetur, risus nibh viverra felis, eget cursus sapien augue at lacus. Curabitur non porttitor odio. Praesent leo risus, lacinia in nibh vitae, consectetur porttitor dui. Fusce sit amet felis et tellus posuere commodo. Sed mi ante, pretium nec mi id, faucibus pharetra ex. Quisque vitae est sit amet nunc dictum facilisis eget eu augue. Sed non nulla pellentesque, euismod magna eu, faucibus est. Suspendisse rutrum lacus ut nulla placerat cursus. Maecenas pulvinar lorem ante, quis auctor diam imperdiet ut. Sed ullamcorper metus at lacus tempus, a blandit augue consequat. Aliquam pellentesque rhoncus ex, vitae sodales eros consequat id. In viverra rhoncus enim in lobortis.',
        },
        {
            id: 2,
            img: home2Img,
            date: '24.02.2021',
            title: 'Каркас возведен',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis sapien eget sem vulputate, at elementum nisi ultrices. Aenean et sollicitudin metus, ut interdum augue. Etiam in sapien vel felis sagittis lobortis. Donec nulla nibh, dictum vitae aliquet in, pulvinar eget lacus. Nunc hendrerit sapien ut ex volutpat, in ornare sapien vulputate. Nulla varius tellus odio. Donec non eros consectetur, pharetra augue quis, lacinia arcu. Ut finibus, massa a fermentum sodales, augue elit euismod purus, ut porta libero diam non purus. Praesent gravida egestas diam at vehicula. Nam vulputate augue turpis, et sagittis augue imperdiet vitae. Phasellus eu augue et tellus gravida viverra at in elit.\n' +
                '\n' +
                'Sed bibendum a massa condimentum aliquam. Pellentesque suscipit mattis libero nec tincidunt. In non enim ante. Vestibulum ex odio, rhoncus ut gravida nec, malesuada vitae ligula. Mauris molestie enim eget orci malesuada, quis commodo libero lobortis. Morbi semper, quam sed convallis pharetra, dui nisi fermentum eros, eget sollicitudin justo velit sed sapien. Sed varius elit feugiat fringilla luctus. In hac habitasse platea dictumst. Duis ornare tempus augue, nec sollicitudin mauris ultricies nec. Morbi a scelerisque est.\n' +
                '\n' +
                'Integer facilisis leo diam. Integer ac nisl eget augue tempus laoreet a non elit. Pellentesque at purus ligula. Ut ut porttitor sem. Fusce sit amet accumsan eros. Praesent quis posuere purus. Proin eleifend luctus dui, euismod luctus libero rhoncus mattis. Mauris finibus turpis dolor, eget aliquet erat pulvinar nec. Maecenas ac ex eu tortor sagittis malesuada. Nulla id faucibus nunc, ultricies malesuada ex. Pellentesque sed risus ipsum. Integer facilisis ullamcorper enim. Fusce feugiat erat sit amet neque tincidunt faucibus. Donec id libero vitae orci ullamcorper aliquam.\n' +
                '\n' +
                'Praesent pellentesque mi nibh, nec accumsan erat ultrices sed. Morbi sed arcu dolor. Maecenas hendrerit arcu quam, nec eleifend tortor mollis sit amet. Nullam aliquam augue id finibus accumsan. Aenean eget ligula in ante bibendum tristique. Nulla euismod consequat enim a egestas. Donec ut quam fringilla, malesuada sapien vitae, aliquam sapien. In porta risus eget elementum gravida. Cras quis ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate vestibulum lobortis.\n' +
                '\n' +
                'Quisque eget pretium leo. Pellentesque sit amet malesuada neque. Morbi egestas, risus at rhoncus consectetur, risus nibh viverra felis, eget cursus sapien augue at lacus. Curabitur non porttitor odio. Praesent leo risus, lacinia in nibh vitae, consectetur porttitor dui. Fusce sit amet felis et tellus posuere commodo. Sed mi ante, pretium nec mi id, faucibus pharetra ex. Quisque vitae est sit amet nunc dictum facilisis eget eu augue. Sed non nulla pellentesque, euismod magna eu, faucibus est. Suspendisse rutrum lacus ut nulla placerat cursus. Maecenas pulvinar lorem ante, quis auctor diam imperdiet ut. Sed ullamcorper metus at lacus tempus, a blandit augue consequat. Aliquam pellentesque rhoncus ex, vitae sodales eros consequat id. In viverra rhoncus enim in lobortis.',
        },
        {
            id: 3,
            img: home3Img,
            date: '24.02.2021',
            title: 'Каркас возведен',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis sapien eget sem vulputate, at elementum nisi ultrices. Aenean et sollicitudin metus, ut interdum augue. Etiam in sapien vel felis sagittis lobortis. Donec nulla nibh, dictum vitae aliquet in, pulvinar eget lacus. Nunc hendrerit sapien ut ex volutpat, in ornare sapien vulputate. Nulla varius tellus odio. Donec non eros consectetur, pharetra augue quis, lacinia arcu. Ut finibus, massa a fermentum sodales, augue elit euismod purus, ut porta libero diam non purus. Praesent gravida egestas diam at vehicula. Nam vulputate augue turpis, et sagittis augue imperdiet vitae. Phasellus eu augue et tellus gravida viverra at in elit.\n' +
                '\n' +
                'Sed bibendum a massa condimentum aliquam. Pellentesque suscipit mattis libero nec tincidunt. In non enim ante. Vestibulum ex odio, rhoncus ut gravida nec, malesuada vitae ligula. Mauris molestie enim eget orci malesuada, quis commodo libero lobortis. Morbi semper, quam sed convallis pharetra, dui nisi fermentum eros, eget sollicitudin justo velit sed sapien. Sed varius elit feugiat fringilla luctus. In hac habitasse platea dictumst. Duis ornare tempus augue, nec sollicitudin mauris ultricies nec. Morbi a scelerisque est.\n' +
                '\n' +
                'Integer facilisis leo diam. Integer ac nisl eget augue tempus laoreet a non elit. Pellentesque at purus ligula. Ut ut porttitor sem. Fusce sit amet accumsan eros. Praesent quis posuere purus. Proin eleifend luctus dui, euismod luctus libero rhoncus mattis. Mauris finibus turpis dolor, eget aliquet erat pulvinar nec. Maecenas ac ex eu tortor sagittis malesuada. Nulla id faucibus nunc, ultricies malesuada ex. Pellentesque sed risus ipsum. Integer facilisis ullamcorper enim. Fusce feugiat erat sit amet neque tincidunt faucibus. Donec id libero vitae orci ullamcorper aliquam.\n' +
                '\n' +
                'Praesent pellentesque mi nibh, nec accumsan erat ultrices sed. Morbi sed arcu dolor. Maecenas hendrerit arcu quam, nec eleifend tortor mollis sit amet. Nullam aliquam augue id finibus accumsan. Aenean eget ligula in ante bibendum tristique. Nulla euismod consequat enim a egestas. Donec ut quam fringilla, malesuada sapien vitae, aliquam sapien. In porta risus eget elementum gravida. Cras quis ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vulputate vestibulum lobortis.\n' +
                '\n' +
                'Quisque eget pretium leo. Pellentesque sit amet malesuada neque. Morbi egestas, risus at rhoncus consectetur, risus nibh viverra felis, eget cursus sapien augue at lacus. Curabitur non porttitor odio. Praesent leo risus, lacinia in nibh vitae, consectetur porttitor dui. Fusce sit amet felis et tellus posuere commodo. Sed mi ante, pretium nec mi id, faucibus pharetra ex. Quisque vitae est sit amet nunc dictum facilisis eget eu augue. Sed non nulla pellentesque, euismod magna eu, faucibus est. Suspendisse rutrum lacus ut nulla placerat cursus. Maecenas pulvinar lorem ante, quis auctor diam imperdiet ut. Sed ullamcorper metus at lacus tempus, a blandit augue consequat. Aliquam pellentesque rhoncus ex, vitae sodales eros consequat id. In viverra rhoncus enim in lobortis.',
        },
    ]

    return (
        <div>
            <HowBuild grey/>
            <WeDo />
            <WhyWe grey/>
        {/*    Слайдер с домами*/}
            <NeedHelp grey/>
            <NewsMini>
                {testNews}
            </NewsMini>
        </div>
    );
};

export default Home;