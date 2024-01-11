import { FormDataManager } from "./form-data-manajer";
import { ModalManager } from "./subject-manajer";

const SharedService = new ModalManager();

const SharedFormData = new FormDataManager();

export { SharedService , SharedFormData };