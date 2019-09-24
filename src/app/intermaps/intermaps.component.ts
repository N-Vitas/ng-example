import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

interface Region {
  name: string
  path: string
  action: boolean
}

@Component({
  selector: 'app-intermaps',
  templateUrl: './intermaps.component.html',
  styleUrls: ['./intermaps.component.scss']
})
export class IntermapsComponent {

  private fill: string = '#5395E3';
  private select_region: Region;
  private regions: Region[] = [
    { name: 'uralsk', path: 'm 20.174515,148.11993 3.695332,1.19849 h 5.692808 l 5.19344,1.59798 3.895079,2.49684 11.585365,4.09483 7.690286,3.29584 6.79142,3.7952 1.697856,-1.59798 3.895079,0.69912 3.495584,0.59924 7.989907,-3.59546 10.386879,-4.69407 4.993692,-1.19848 2.097351,-2.09735 8.089777,-0.0999 4.69407,2.2971 -0.39949,2.19722 4.79394,2.89635 2.59672,-1.09862 5.09357,3.19597 3.49558,-7.09105 2.99622,0.0999 1.09861,-5.09357 3.99495,-0.99874 6.99117,-0.39949 4.09483,-3.19596 1.09861,-5.49307 5.09357,-2.29709 7.19091,1.4981 2.6966,-2.69659 2.39697,-5.79268 -1.69786,-6.39193 1.29836,-2.39697 1.29836,-5.89256 -4.89382,-5.39318 1.99748,-3.49559 -4.29457,-9.18839 -7.39067,-8.689024 -11.28574,-10.087257 -10.08726,-1.29836 -5.29331,2.696593 -4.89382,2.696594 -3.69533,-7.690285 -6.4918,-2.896342 -8.98865,6.4918 -14.281955,3.295836 -9.288266,7.091043 -8.788898,2.197224 0.499369,5.293313 0.798991,4.793945 -2.496846,5.39319 -9.488014,2.09735 -4.094827,-3.39571 -1.797729,-6.991172 -0.898865,-7.690285 -4.094827,-2.59672 -3.795206,2.097351 v 5.393187 l -2.097351,3.994949 -2.396972,1.59799 -5.592934,0.29962 -1.498108,4.69407 -3.994953,3.7952 1.697855,4.79395 -4.194701,7.49053 -4.594197,0.799 -5.193439,8.98864 2.396972,1.29836 h 3.195963 l 2.09735,4.99369 3.395711,2.99622 -1.597982,3.99495 -5.592935,0.0999 z', action: false },
    { name: 'aturau', path: 'm 38.651174,153.41324 -2.496846,0.79899 0.599243,7.39067 5.992431,10.98612 0.399495,9.38814 -1.198486,2.79647 -4.394449,-2.39698 -2.197224,2.59672 5.393187,5.99243 3.795206,0.59925 5.393187,6.59167 4.194701,-0.79899 5.193439,-4.5942 9.188393,-3.7952 8.788898,-1.19849 3.994953,-1.79773 5.592935,0.19975 2.59672,-0.59924 5.792682,4.1947 1.997477,2.59672 4.594194,3.59546 5.39319,-2.59672 4.39445,2.79646 6.99117,0.59925 5.19344,4.1947 -2.59672,3.99495 -2.59672,4.1947 1.39823,4.99369 -3.19596,4.19471 -0.59925,2.79646 -4.59419,1.99748 6.39192,3.39571 8.58915,1.39823 6.99117,-0.39949 7.98991,-3.79521 2.59672,-3.39571 h 13.98234 l 2.39697,-0.99874 8.7889,0.99874 3.39571,-3.19596 6.39192,4.5942 0.59924,3.39571 3.19597,0.59924 4.79394,2.79647 2.99622,-0.19975 -1.59799,-8.98865 -9.78763,-4.99369 -8.18966,-5.19344 -4.79394,-9.58789 2.39697,-8.78889 1.99748,-8.58915 -3.19596,-5.19344 1.59798,-4.1947 -2.19723,-3.39571 2.19723,-6.39193 -5.39319,-3.7952 -3.79521,3.59545 -7.39066,-4.59419 0.3995,-6.79142 -6.19218,-5.99243 -4.09483,3.19596 -6.99117,0.39949 -3.99495,0.99874 -1.09861,5.09357 -2.99622,-0.0999 -3.49558,7.09105 -5.09357,-3.19597 -2.59672,1.09862 -4.79394,-2.89635 0.39949,-2.19722 -4.69407,-2.2971 -8.089777,0.0999 -2.097351,2.09735 -4.993692,1.19848 -18.376786,8.28953 -7.390663,-1.29836 -1.697856,1.59798 -6.79142,-3.7952 z', action: false },
    { name: 'aktau', path: 'm 112.42937,223.02259 -2.75423,2.89548 0.63559,6.21469 -0.14124,2.33051 -22.52825,-7.76836 -9.887005,0.91807 -3.048606,1.30488 -0.998738,4.99369 -6.391926,0.19975 v 3.99496 l 5.19344,8.58915 -4.594197,0.59924 -3.795206,-4.79395 -9.188392,-2.19722 -3.595459,1.59798 -1.597981,5.19344 2.197224,4.1947 7.190917,1.59798 2.796467,11.78512 -1.597981,6.79142 4.194701,4.39445 -2.59672,4.99369 1.797729,4.39445 7.590412,0.59924 3.39571,5.79268 6.991168,5.79268 7.190917,0.79899 0.79899,3.59546 -6.591673,7.98991 -0.998738,10.98612 1.660766,1.65582 13.135593,-8.8983 22.457628,-0.9887 11.58192,11.72316 0.56497,6.49718 11.44068,13.55932 10.59322,0.84746 -0.42373,-6.35594 15.67796,-81.63841 25.36944,-6.31327 -3.39571,-22.57149 -2.99622,0.19975 -4.79394,-2.79647 -3.19597,-0.59924 -0.59924,-3.39571 -6.39192,-4.5942 -3.39571,3.19596 -8.7889,-0.99874 -2.39697,0.99874 h -13.98234 l -2.59672,3.39571 -7.98991,3.79521 -6.99117,0.39949 -8.58915,-1.39823 z', action: false },
    { name: 'aktobe', path: 'm 194.15474,250.89011 23.76997,-4.1947 -4.79394,13.18334 -2.99622,14.18209 5.39319,8.3894 12.78385,4.99369 h 12.18461 l 14.58158,-9.58789 6.39192,-4.99369 2.39697,-10.58663 -4.59419,-6.79142 2.59672,-11.78511 8.98864,-4.79394 4.79395,-9.38814 v -5.79269 l -6.99117,3.59546 -4.39445,-6.59167 5.39319,-1.19849 2.79646,-5.79268 7.19092,0.59924 7.79016,-16.97855 9.78763,-0.3995 17.37805,17.9773 26.16695,-17.9773 -5.03508,-7.6927 -4.23729,-6.21469 -13.41808,-6.77966 0.84746,-2.54237 -2.68361,-2.54238 -2.96611,1.69492 -5.08474,-4.51978 -0.9887,-7.06214 -1.69492,-4.80226 2.68362,-6.07345 3.38983,-5.08474 3.10734,0.9887 1.69492,-2.11865 -8.05085,-12.57062 -4.23729,-6.63842 -1.41243,-3.38983 1.41243,-0.70621 -1.9774,-5.08475 -2.25988,0.42373 -3.24859,-3.81356 -3.9548,-0.84745 -6.01745,0.48355 -2.99622,5.99243 -0.59924,4.5942 -6.79142,2.39697 -9.78764,-1.39823 -5.19344,-2.79647 -5.59293,4.1947 -7.59041,-3.19596 -8.98865,-3.59546 -3.39571,-5.99243 -13.24463,-2.66071 -4.66102,1.97741 -3.67231,-3.81356 -12.28814,0.9887 -5.64972,2.68361 -1.69491,4.09605 -6.63842,1.27118 -7.62712,-3.9548 -2.68361,-5.50847 -5.79096,-3.24859 -1.9774,3.38983 -6.48029,-0.41409 -1.99748,3.49559 4.89382,5.39318 -1.29836,5.89256 -1.29836,2.39697 1.69786,6.39193 -2.39697,5.79268 -2.6966,2.69659 -7.19091,-1.4981 -5.09357,2.29709 -1.09861,5.49307 6.19218,5.99243 -0.3995,6.79142 7.39066,4.59419 3.79521,-3.59545 5.39319,3.7952 -2.19723,6.39193 2.19723,3.39571 -1.59798,4.1947 3.19596,5.19344 -4.39445,17.37804 4.79394,9.58789 17.97729,10.18713 z', action: false },
    { name: 'astana', path: 'm 366.53698,83.501558 -2.19723,5.792682 -2.19722,6.791421 -5.99243,3.994949 2.59672,3.79521 -1.59798,5.79268 2.59672,5.99243 1.39823,6.99117 5.19344,-0.59924 6.99117,1.79773 9.58789,-3.39571 3.39571,-7.79016 8.3894,-0.99874 12.78385,-2.59672 10.38688,0.59924 9.98738,6.39193 5.19344,2.99621 h 17.97729 l 11.58537,4.79395 12.1846,8.18965 9.58789,-4.39445 9.98739,-6.59167 -6.59168,-5.19344 8.98865,-1.59798 6.39192,-7.39066 -6.19217,-3.99496 2.59672,-7.390662 -1.12262,-3.113541 -12.85311,2.683616 -3.10734,-5.225989 -6.92091,0.141243 -3.10734,-6.214689 1.12994,-4.378531 -2.40113,-2.118644 1.83616,-3.813559 -9.60452,-2.40113 -8.19209,1.412429 -4.80226,5.367232 -2.40113,1.694915 -7.34463,-3.248587 -4.32916,-2.057892 -4.5942,3.595458 -3.29584,-0.798991 -2.89634,2.996215 -5.29331,-1.29836 -1.59798,-3.595458 -5.09357,0.798991 -4.49432,-4.394449 -5.09357,4.094828 -5.29331,3.096088 -2.19722,5.792683 -8.98865,-2.197224 -1.09861,4.094827 -9.38814,-0.09987 z', action: false },
    { name: 'kostanay', path: 'm 366.53698,83.501558 0.059,-5.888568 0.14125,-3.88418 2.11864,-3.107345 -3.03672,-3.460452 3.4605,-0.918079 0.14124,-2.612994 -0.9887,-3.531073 -0.84746,-3.742938 -2.54237,-1.836158 0.84746,-2.824859 -2.25989,-5.29661 -0.91808,-3.036723 4.5904,-1.412429 0.0706,-2.048023 -2.613,-2.118644 v -3.954802 l -4.46501,-1.161906 -5.89255,0.199748 -0.94881,4.294575 -11.03605,0.399495 -5.74275,1.548044 -4.09483,2.996215 -5.29331,-3.146025 -11.68524,0.998738 1.29836,2.396972 -4.89382,-1.098612 -6.4918,0.499369 -1.29836,3.695332 -12.78385,-2.896341 -5.29331,2.297098 0.89886,6.092304 2.59672,3.595458 9.98739,9.188393 -1.19849,4.594197 -15.58032,-1.198486 -5.19344,4.993692 2.59672,8.988645 -4.39445,5.393187 -8.58915,5.99243 5.19344,8.389407 14.58158,4.39444 -0.39949,6.79142 6.01745,-0.48355 3.9548,0.84745 3.24859,3.81356 2.25988,-0.42373 1.9774,5.08475 -1.41243,0.70621 1.41243,3.38983 12.28814,19.20904 -1.69492,2.11865 -3.10734,-0.9887 -3.38983,5.08474 -2.68362,6.07345 1.69492,4.80226 0.9887,7.06214 5.08474,4.51978 2.96611,-1.69492 2.68361,2.54238 -0.84746,2.54237 13.41808,6.77966 4.67817,6.86629 2.84641,-2.74653 0.59924,-3.79521 5.34325,-3.04615 0.59924,-3.44565 3.29584,-1.54804 1.29836,-3.39571 12.13045,0.80027 6.49718,-3.95481 6.21469,-2.11864 12.8531,-14.12429 7.06215,-9.74577 2.40113,-3.10734 -0.84746,-3.38983 3.67232,-1.12994 -0.14124,-5.08475 -7.34464,0.42373 -4.9435,3.81356 -2.9661,-2.25989 1.69491,-4.23729 -10.73446,-1.69491 -2.3778,-2.27935 -6.99117,-1.79773 -5.19344,0.59924 -1.39823,-6.99117 -2.59672,-5.99243 1.59798,-5.79268 -2.59672,-3.79521 5.99243,-3.994949 z', action: false },
    { name: 'petropavlovsk', path: 'm 364.75985,33.827681 1.67725,-1.361653 6.09231,-0.998739 10.287,-4.793944 10.88625,-1.897603 7.49054,-1.398233 0.39949,-5.393188 6.79142,-4.394448 5.29332,-0.798991 8.78889,3.096089 8.28953,1.597981 7.39067,-2.197224 4.89381,1.997477 0.49937,9.488014 4.39445,2.896341 0.49937,6.991169 1.09861,7.890033 13.88247,-1.398234 2.59672,4.594197 7.79016,-2.796468 8.58915,3.195963 -1.19849,7.790159 3.99495,3.395711 3.79521,7.590411 0.19975,8.189655 5.59293,6.991168 3.67133,10.269553 -12.85311,2.683616 -3.10734,-5.225989 -6.92091,0.141243 -3.10734,-6.214689 1.12994,-4.378531 -2.40113,-2.118644 1.83616,-3.813559 -9.60452,-2.40113 -5.1969,-5.720674 -2.19723,-5.592935 -5.59293,-0.599243 -20.37426,-0.399495 -7.39067,-4.394449 -8.18965,2.796467 -9.1884,-0.399495 -8.98864,-0.599243 -4.1947,1.997477 -6.79142,7.390663 -5.59294,1.997477 -10.29943,-3.891804 -1.83616,-7.274011 -2.54237,-1.836158 0.84746,-2.824859 -3.17797,-8.333333 4.5904,-1.412429 0.0706,-2.048023 -2.613,-2.118644 z', action: false },
    { name: 'kokshetau', path: 'm 369.42089,63.62994 -0.14124,2.612994 -3.4605,0.918079 3.03672,3.460452 -2.11864,3.107345 -0.20025,9.772748 10.48675,2.796471 9.38814,0.09987 1.09861,-4.094827 8.98865,2.197224 2.19722,-5.792683 5.29331,-3.096088 5.09357,-4.094828 4.49432,4.394449 5.09357,-0.798991 1.59798,3.595458 5.29331,1.29836 2.89634,-2.996215 3.29584,0.798991 4.5942,-3.595458 11.67379,5.306479 2.40113,-1.694915 4.80226,-5.367232 8.19209,-1.412429 -5.1969,-5.720674 -2.19723,-5.592935 -5.59293,-0.599243 -20.37426,-0.399495 -7.39067,-4.394449 -8.18965,2.796467 -18.17704,-0.998738 -4.1947,1.997477 -6.79142,7.390663 -5.59294,1.997477 z', action: false },
    { name: 'gheskazgan', path: 'm 340.76953,196.95823 -26.16695,17.9773 9.54995,3.84977 19.91525,7.48588 14.68927,6.49717 8.75706,5.64972 26.27119,1.12994 7.76836,3.67232 53.9548,-5.79096 11.30185,-3.11832 -4.39445,-5.39319 -1.19849,-7.39066 -11.58536,7.79016 -5.39319,-0.79899 1.19849,-12.58411 6.39192,-2.99621 -3.19596,-4.79395 -5.99243,2.19723 -2.19723,-7.98991 10.78638,-10.18713 -5.99243,-11.18587 -1.39823,-13.58284 -8.7889,-0.99874 9.18839,-4.99369 16.37931,1.39823 6.99117,-0.19974 5.59293,-3.99496 -2.39697,-7.9899 -7.59041,-2.39698 3.99495,-8.78889 7.59041,-7.39067 -12.1846,-8.18965 -11.58537,-4.79395 h -17.97729 l -15.18082,-9.38814 -10.38688,-0.59924 -12.78385,2.59672 -8.3894,0.99874 -3.39571,7.79016 -9.58789,3.39571 2.37778,2.27935 10.73446,1.69491 -1.69491,4.23729 2.9661,2.25989 4.9435,-3.81356 7.34464,-0.42373 0.14124,5.08475 -3.67232,1.12994 0.84746,3.38983 -9.46328,12.85311 -12.8531,14.12429 -6.21469,2.11864 -6.49718,3.95481 -12.13045,-0.80027 -1.29836,3.39571 -3.29584,1.54804 -0.59924,3.44565 -5.34325,3.04615 -0.59924,3.79521 -2.84641,2.74653 z', action: false },
    { name: 'kyzylorda', path: 'm 401.55366,243.22033 -2.25807,5.07306 -1.4981,10.18713 1.19848,5.39318 4.1947,1.69786 3.39571,16.67893 -2.59672,4.89382 -4.59419,2.59672 -3.29584,10.98612 -3.59546,5.89256 2.2971,7.09104 -5.29331,5.99243 -11.38562,4.09483 -15.97981,9.28826 -0.56062,-13.17103 -12.14689,-5.79096 -12.1469,-12.85311 -7.76836,5.79096 -25.84745,-4.37853 -24.42507,2.53787 -21.373,-29.56265 3.59546,-2.79647 2.39697,-10.58663 -4.59419,-6.79142 2.59672,-11.78511 8.98864,-4.79394 4.79395,-9.38814 v -5.79269 l -6.99117,3.59546 -4.39445,-6.59167 5.39319,-1.19849 2.79646,-5.79268 7.19092,0.59924 7.79016,-16.97855 9.78763,-0.3995 17.37805,17.9773 44.15447,17.83282 8.75706,5.64972 26.27119,1.12994 z', action: false },
    { name: 'shimkent', path: 'm 362.14253,333.08627 -0.49937,10.1372 6.14224,1.74779 -0.64918,8.3894 5.19344,9.78764 7.59041,1.99747 15.78007,-0.19974 14.98107,9.18839 12.5841,-4.5942 0.799,-6.99117 10.58662,-6.59167 7.79016,-11.98486 15.58032,-10.18713 -1.19849,-5.99243 -11.58536,-5.99243 -0.59924,-7.79016 -8.58915,-3.99495 -5.59294,-0.59925 -3.19596,-5.79268 6.99117,-18.37678 9.98738,-0.799 6.39193,2.19723 3.59545,-2.39697 -4.59419,-9.38814 -17.97729,-35.15559 -30.10106,3.51609 -2.25807,5.07306 -1.4981,10.18713 1.19848,5.39318 4.1947,1.69786 3.39571,16.67893 -2.59672,4.89382 -4.59419,2.59672 -3.29584,10.98612 -3.59546,5.89256 2.2971,7.09104 -5.29331,5.99243 -11.38562,4.09483 z', action: false },
    { name: 'taraz', path: 'm 431.65472,239.70424 23.85374,-2.27487 11.30185,-3.11832 29.09363,-1.5427 14.97175,16.24294 6.63842,13.41808 6.35593,7.76836 9.60452,2.40113 4.51977,3.81356 0.9887,6.77966 -3.81356,5.36723 6.07345,2.68362 7.48587,3.9548 7.34464,10.02825 2.25988,10.16949 -7.76836,3.81356 -12.42938,-3.53108 -14.40678,-4.9435 -11.15819,2.11864 -6.21469,4.94351 -0.56497,13.98305 -14.68926,-4.37853 -14.97175,-2.82486 -10.02825,1.12994 -8.08027,8.07919 -1.19849,-5.99243 -11.58536,-5.99243 -0.59924,-7.79016 -8.58915,-3.99495 -5.59294,-0.59925 -3.19596,-5.79268 6.99117,-18.37678 9.98738,-0.799 6.39193,2.19723 3.59545,-2.39697 z', action: false },
    { name: 'almaty', path: 'm 558.33331,315.39547 5.75411,-1.48497 8.08978,-3.59546 19.97477,1.09861 18.37679,-2.49685 10.287,0.0999 5.49306,5.39319 11.98486,1.4981 4.09483,2.49685 0.59924,-11.98486 3.99496,-12.38436 -2.79647,-11.58536 -8.98865,-23.17073 -7.79016,-4.5942 19.57528,-9.58789 10.18713,-5.59293 13.98233,2.5967 1.59799,-5.39319 -6.19218,-6.39192 0.95612,-19.58165 -6.77966,-3.38983 -2.25989,-4.80226 -10.45197,-4.51977 -14.1243,1.69492 -8.47457,-0.56498 -7.34464,-6.49717 -12.42937,-0.56497 -11.01695,0.56497 -0.56498,7.9096 -1.41242,9.03955 -12.1469,0.28249 -7.34463,2.54237 -10.73446,-0.28249 -5.08475,-8.47457 h -9.887 l -17.51413,12.99435 -19.77401,11.58192 -14.26553,4.51977 14.97175,16.24294 6.63842,13.41808 6.35593,7.76836 9.60452,2.40113 4.51977,3.81356 0.9887,6.77966 -3.81356,5.36723 13.55932,6.63842 7.34464,10.02825 z', action: false },
    { name: 'karaganda', path: 'm 496.77246,114.2627 -8.98865,1.59798 6.59168,5.19344 -9.98739,6.59167 -9.58789,4.39445 -7.59041,7.39067 -3.99495,8.78889 7.59041,2.39698 2.39697,7.9899 -5.59293,3.99496 -23.37048,-1.19849 -9.18839,4.99369 8.7889,0.99874 1.39823,13.58284 5.99243,11.18587 -10.78638,10.18713 2.19723,7.98991 5.99243,-2.19723 3.19596,4.79395 -6.39192,2.99621 -1.19849,12.58411 5.39319,0.79899 11.58536,-7.79016 1.19849,7.39066 4.39445,5.39319 29.09363,-1.5427 14.26553,-4.51977 19.77401,-11.58192 17.51413,-12.99435 7.62712,-8.47458 5.64971,-4.23729 -8.47457,-1.9774 8.75706,-7.06214 -4.23729,-11.86441 -1.12994,-12.71186 -6.21469,-7.06215 -1.69492,-19.49153 -16.66666,-2.82485 -10.16949,1.12994 -4.23729,1.9774 -4.80226,-2.82486 -8.75706,2.54237 1.41243,-9.32203 -1.97741,-6.77966 z', action: false },
    { name: 'pavlodar', path: 'm 485.18709,59.33209 1.46544,-3.188026 2.9661,-2.118644 3.53107,-0.423728 1.90678,1.836158 4.02542,-2.824859 3.74294,-2.966102 2.04802,-0.9887 4.37853,-3.954802 18.6817,-14.234836 3.19597,3.795206 v 7.091042 l 22.37174,10.386879 23.37047,29.962151 8.98865,11.185869 -7.98991,7.790162 -4.79394,3.7952 2.19722,3.99496 8.58915,2.99621 4.39445,5.79268 -2.39697,2.19723 3.99495,2.59672 -2.19722,6.19218 -5.39319,2.19722 -10.18713,-2.79647 -4.99369,-4.39445 -6.59168,-0.59924 -4.99369,-2.59672 -3.19596,3.39571 -0.39949,6.39193 -4.16273,0.94793 -16.66666,-2.82485 -10.16949,1.12994 -4.23729,1.9774 -4.80226,-2.82486 -8.75706,2.54237 1.41243,-9.32203 -1.97741,-6.77966 -5.76989,-0.42656 6.39192,-7.39066 -6.19217,-3.99496 2.59672,-7.390662 -1.12262,-3.113541 -3.67133,-10.269553 -5.59293,-6.991168 -0.19975,-8.189655 z', action: false },
    { name: 'semey', path: 'm 585.85992,92.889698 -7.98991,7.790162 -4.79394,3.7952 2.19722,3.99496 8.58915,2.99621 4.39445,5.79268 -2.39697,2.19723 3.99495,2.59672 -2.19722,6.19218 -5.39319,2.19722 -10.18713,-2.79647 -4.99369,-4.39445 -6.59168,-0.59924 -4.99369,-2.59672 -3.19596,3.39571 -0.39949,6.39193 -4.16273,0.94793 1.69492,19.49153 6.21469,7.06215 1.12994,12.71186 4.23729,11.86441 -8.75706,7.06214 8.47457,1.9774 -5.64971,4.23729 -7.62712,8.47458 h 9.887 l 5.08475,8.47457 10.73446,0.28249 7.34463,-2.54237 12.1469,-0.28249 1.9774,-16.94915 11.01695,-0.56497 12.42937,0.56497 7.34464,6.49717 8.47457,0.56498 14.1243,-1.69492 8.19209,-15.25424 -1.41243,-15.8192 -1.41243,-17.79661 -18.36158,-7.90961 -1.69492,-9.32203 1.12994,-9.03955 9.88701,-3.67232 -5.9322,-12.71186 -14.68927,-2.25989 -14.40678,-9.604516 -6.49717,8.474576 -6.77966,1.9774 z', action: false },
    { name: 'usty-kamenogorsk', path: 'm 638.41806,106.49717 5.9322,12.71186 -9.88701,3.67232 -1.12994,9.03955 1.69492,9.32203 18.36158,7.90961 2.82486,33.61581 -8.19209,15.25424 10.45197,4.51977 2.25989,4.80226 6.77966,3.38983 2.82486,-22.31638 17.79661,1.69492 17.79661,-1.41243 11.01695,-7.34464 -0.56498,-11.01694 -5.36723,-8.75707 0.84746,-12.14689 10.45198,-3.38983 5.9322,-6.77966 -1.41243,-10.45198 4.51978,-5.64971 -11.29944,-6.21469 -8.19209,-0.28249 -3.10734,4.80226 -12.71187,0.28249 -10.73446,-11.86441 -10.73446,-0.84746 -11.29944,-12.711861 -12.99435,-1.129943 z', action: false },
  ];
  constructor() { }

  changeColor(region: Region) {
    this.select_region = region;
    this.regions = this.regions.map(r => {
      r.action = r.name == region.name;
      return r
    })
  }
  dropMove(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, 
          event.previousIndex, event.currentIndex);
    } else {
       transferArrayItem(event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex);
    }
 }

}
