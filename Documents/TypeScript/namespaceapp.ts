import { ContracturalNamespace, SalariedNamespace} from "./myNamespace";

var salEmp = new SalariedNamespace.Employee("saranya", "duggaraju");
salEmp.showDetails();

var contEmp = new ContracturalNamespace.Employee("shynu", "duggaraju");
contEmp.showDetails();