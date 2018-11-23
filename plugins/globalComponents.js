import Badge from "../components/Argon/Badge";
import BaseAlert from "../components/Argon/BaseAlert";
import BaseButton from "../components/Argon/BaseButton";
import BaseDropdown from '../components/Argon/BaseDropdown';
import BaseCheckbox from "../components/Argon/BaseCheckbox";
import BaseInput from "../components/Argon/BaseInput";
import BaseNav from "../components/Argon/BaseNav";
import BasePagination from "../components/Argon/BasePagination";
import BaseProgress from "../components/Argon/BaseProgress";
import BaseRadio from "../components/Argon/BaseRadio";
import BaseSlider from "../components/Argon/BaseSlider";
import BaseSwitch from "../components/Argon/BaseSwitch";
import Card from "../components/Argon/Card";
import CloseButton from "../components/Argon/CloseButton";
import Icon from "../components/Argon/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(Card.name, Card);
    Vue.component(CloseButton.name, CloseButton);
    Vue.component(Icon.name, Icon);
  }
};
