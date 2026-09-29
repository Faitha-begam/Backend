import { useEffect, useMemo, useState } from "react";
import {
  Landmark, Menu, X, House, Layers3, Settings, TriangleAlert, Folder,
  Plus, Pencil, Save, Trash2, ArrowRight, MapPin, ShieldCheck, HeartHandshake,
  Search, CheckCircle2, Building2, ChevronDown
} from "lucide-react";

const initialCategories = [
  { id: 1, name: "Citizen Services", status: "Active" },
  { id: 2, name: "Utilities", status: "Active" },
  { id: 3, name: "Certificates", status: "Active" },
];
const initialDepartments = [
  { id: 1, name: "Revenue Department", categoryId: 1, status: "Active" },
  { id: 2, name: "Transport Department", categoryId: 1, status: "Active" },
  { id: 3, name: "Municipal Administration", categoryId: 2, status: "Active" },
];
const initialServices = [
  { id: 1, name: "Community Certificate", departmentId: 1, status: "Active" },
  { id: 2, name: "Driving License", departmentId: 2, status: "Active" },
  { id: 3, name: "Property Tax Payment", departmentId: 3, status: "Active" },
];

function loadData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function StatusBadge({ status }) {
  const active = status === "Active";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-500" : "bg-slate-400"}`} />
      {status}
    </span>
  );
}

function Field({ label, children }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

const inputClass = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10";
const buttonClass = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-offset-1";

function FormCard({ tone, icon: Icon, title, description, children, onSubmit, buttonText, editing }) {
  const tones = {
    blue: { panel: "border-blue-100 bg-blue-50/70", icon: "bg-blue-600", button: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500/20" },
    green: { panel: "border-emerald-100 bg-emerald-50/70", icon: "bg-emerald-700", button: "bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-500/20" },
    purple: { panel: "border-violet-100 bg-violet-50/70", icon: "bg-violet-600", button: "bg-violet-600 hover:bg-violet-700 focus:ring-violet-500/20" },
  };
  const t = tones[tone];
  return (
    <section className={`rounded-2xl border p-4 sm:p-5 ${t.panel}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-sm ${t.icon}`}>
          <Icon size={21} />
        </div>
        <div>
          <h2 className="font-bold text-slate-900">{title}</h2>
          <p className="mt-0.5 text-xs leading-5 text-slate-600">{description}</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-white/80 bg-white/90 p-3.5 sm:p-4">
        {children}
        <button type="submit" className={`${buttonClass} mt-1 w-full text-white focus:ring-offset-white ${t.button}`}>
          {editing ? <Save size={16} /> : <Plus size={16} />}
          {buttonText}
        </button>
      </form>
    </section>
  );
}

function DataTable({ title, icon: Icon, tone, columns, rows, onEdit, onDelete, emptyText }) {
  const tones = {
    blue: "bg-blue-600",
    green: "bg-emerald-700",
    purple: "bg-violet-600",
  };
  return (
    <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.02]">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span className={`grid h-9 w-9 place-items-center rounded-lg text-white ${tones[tone]}`}><Icon size={18} /></span>
          <h2 className="font-bold text-slate-900">{title}</h2>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">{rows.length}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="w-12 px-4 py-3 font-semibold">#</th>
              {columns.map((col) => <th key={col.key} className="px-4 py-3 font-semibold">{col.label}</th>)}
              <th className="px-4 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.length === 0 ? (
              <tr><td colSpan={columns.length + 2} className="px-4 py-10 text-center text-sm text-slate-500">{emptyText}</td></tr>
            ) : rows.map((row, index) => (
              <tr key={row.id} className="transition hover:bg-slate-50/80">
                <td className="px-4 py-3.5 text-slate-400">{index + 1}</td>
                {columns.map((col) => (
                  <td key={col.key} className="max-w-56 px-4 py-3.5 text-slate-700">
                    {col.render ? col.render(row) : <span className="break-words">{row[col.key] || "—"}</span>}
                  </td>
                ))}
                <td className="px-4 py-3.5">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" title="Edit" onClick={() => onEdit(row)} className="rounded-lg border border-blue-100 bg-blue-50 p-2 text-blue-700 transition hover:bg-blue-100"><Pencil size={15} /></button>
                    <button type="button" title="Save / finish editing" onClick={() => onEdit(row, true)} className="rounded-lg border border-emerald-100 bg-emerald-50 p-2 text-emerald-700 transition hover:bg-emerald-100"><Save size={15} /></button>
                    <button type="button" title="Delete" onClick={() => onDelete(row)} className="rounded-lg border border-red-100 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function App() {
  const [categories, setCategories] = useState(() => loadData("tn-portal-categories", initialCategories));
  const [departments, setDepartments] = useState(() => loadData("tn-portal-departments", initialDepartments));
  const [services, setServices] = useState(() => loadData("tn-portal-services", initialServices));
  const [categoryForm, setCategoryForm] = useState({ name: "", status: "Active" });
  const [departmentForm, setDepartmentForm] = useState({ name: "", categoryId: "", status: "Active" });
  const [serviceForm, setServiceForm] = useState({ name: "", departmentId: "", status: "Active" });
  const [editing, setEditing] = useState({ type: "", id: null });
  const [notice, setNotice] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => localStorage.setItem("tn-portal-categories", JSON.stringify(categories)), [categories]);
  useEffect(() => localStorage.setItem("tn-portal-departments", JSON.stringify(departments)), [departments]);
  useEffect(() => localStorage.setItem("tn-portal-services", JSON.stringify(services)), [services]);

  const categoryName = (id) => categories.find((item) => item.id === Number(id))?.name || "—";
  const departmentName = (id) => departments.find((item) => item.id === Number(id))?.name || "—";

  function flash(message) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2800);
  }

  function submitCategory(event) {
    event.preventDefault();
    const name = categoryForm.name.trim();
    if (!name) return;
    if (editing.type === "category") {
      setCategories((items) => items.map((item) => item.id === editing.id ? { ...item, ...categoryForm, name } : item));
      setEditing({ type: "", id: null });
      flash("Category updated successfully.");
    } else {
      setCategories((items) => [...items, { id: Date.now(), name, status: categoryForm.status }]);
      flash("Category added successfully.");
    }
    setCategoryForm({ name: "", status: "Active" });
  }

  function submitDepartment(event) {
    event.preventDefault();
    const name = departmentForm.name.trim();
    if (!name || !departmentForm.categoryId) return;
    const record = { ...departmentForm, name, categoryId: Number(departmentForm.categoryId) };
    if (editing.type === "department") {
      setDepartments((items) => items.map((item) => item.id === editing.id ? { ...item, ...record } : item));
      setEditing({ type: "", id: null });
      flash("Department updated successfully.");
    } else {
      setDepartments((items) => [...items, { id: Date.now(), ...record }]);
      flash("Department added successfully.");
    }
    setDepartmentForm({ name: "", categoryId: "", status: "Active" });
  }

  function submitService(event) {
    event.preventDefault();
    const name = serviceForm.name.trim();
    if (!name || !serviceForm.departmentId) return;
    const record = { ...serviceForm, name, departmentId: Number(serviceForm.departmentId) };
    if (editing.type === "service") {
      setServices((items) => items.map((item) => item.id === editing.id ? { ...item, ...record } : item));
      setEditing({ type: "", id: null });
      flash("Service updated successfully.");
    } else {
      setServices((items) => [...items, { id: Date.now(), ...record }]);
      flash("Service added successfully.");
    }
    setServiceForm({ name: "", departmentId: "", status: "Active" });
  }

  function editRow(type, row, finish = false) {
    if (finish && editing.type === type && editing.id === row.id) {
      // The row-level Update action saves the values currently loaded in its form.
      if (type === "category") {
        setCategories((items) => items.map((item) => item.id === row.id ? { ...item, ...categoryForm, name: categoryForm.name.trim() } : item));
      } else if (type === "department") {
        setDepartments((items) => items.map((item) => item.id === row.id ? { ...item, ...departmentForm, name: departmentForm.name.trim(), categoryId: Number(departmentForm.categoryId) } : item));
      } else if (type === "service") {
        setServices((items) => items.map((item) => item.id === row.id ? { ...item, ...serviceForm, name: serviceForm.name.trim(), departmentId: Number(serviceForm.departmentId) } : item));
      }
      cancelEdit();
      flash(`${type[0].toUpperCase() + type.slice(1)} updated successfully.`);
      return;
    }
    startEdit(type, row);
    document.getElementById(`${type}-form`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (finish) flash("Edit the values in the form, then click Update to save.");
  }

  function startEdit(type, row) {
    setEditing({ type, id: row.id });
    if (type === "category") setCategoryForm({ name: row.name, status: row.status });
    if (type === "department") setDepartmentForm({ name: row.name, categoryId: String(row.categoryId), status: row.status });
    if (type === "service") setServiceForm({ name: row.name, departmentId: String(row.departmentId), status: row.status });
  }

  function deleteRow(type, row) {
    const label = type === "category" ? "category" : type;
    if (!window.confirm(`Delete "${row.name}" ${label}?`)) return;
    if (type === "category") {
      setCategories((items) => items.filter((item) => item.id !== row.id));
      // Clear dependent records to avoid dangling category references.
      const dependentDepartments = departments.filter((item) => item.categoryId === row.id).map((item) => item.id);
      setDepartments((items) => items.filter((item) => item.categoryId !== row.id));
      setServices((items) => items.filter((item) => !dependentDepartments.includes(item.departmentId)));
    }
    if (type === "department") {
      setDepartments((items) => items.filter((item) => item.id !== row.id));
      setServices((items) => items.filter((item) => item.departmentId !== row.id));
    }
    if (type === "service") setServices((items) => items.filter((item) => item.id !== row.id));
    if (editing.type === type && editing.id === row.id) cancelEdit();
    flash(`${type[0].toUpperCase() + type.slice(1)} deleted.`);
  }

  function cancelEdit() {
    setEditing({ type: "", id: null });
    setCategoryForm({ name: "", status: "Active" });
    setDepartmentForm({ name: "", categoryId: "", status: "Active" });
    setServiceForm({ name: "", departmentId: "", status: "Active" });
  }

  const navItems = [
    { label: "Home", href: "#home", icon: House },
    { label: "Department", href: "#departments", icon: Landmark },
    { label: "Services", href: "#services", icon: Settings },
    { label: "Issues", href: "#issues", icon: TriangleAlert },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-teal-700 bg-teal-50 text-teal-800">
              <Landmark size={25} />
            </div>
            <div className="min-w-0">
              <div className="truncate text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl">Tamil Nadu</div>
              <div className="truncate text-xs text-slate-600 sm:text-sm">Government Services Portal</div>
            </div>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-800 lg:px-4">
                <Icon size={17} /> {label}
              </a>
            ))}
          </nav>
          <button className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden" onClick={() => setMobileMenu((v) => !v)} aria-label="Toggle navigation">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileMenu && <nav className="grid gap-1 border-t border-slate-100 px-4 py-3 md:hidden">{navItems.map(({ label, href, icon: Icon }) => <a key={label} href={href} onClick={() => setMobileMenu(false)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-teal-50"><Icon size={17} />{label}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-sky-100">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 78% 20%, #bfdbfe 0, transparent 28%), radial-gradient(circle at 10% 90%, #fed7aa 0, transparent 35%)" }} />
          <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-teal-800 shadow-sm">
                <MapPin size={14} /> Serving every district of Tamil Nadu
              </div>
              <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                A better Tamil Nadu, <span className="text-teal-700">together.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Access government services, find the right department, and bring local issues to the attention of the people who can help.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#issues" className={`${buttonClass} bg-teal-700 text-white shadow-sm hover:bg-teal-800 focus:ring-teal-600/20`}>
                  Explore services <ArrowRight size={17} />
                </a>
                <a href="#categories" className={`${buttonClass} border border-slate-200 bg-white/90 text-slate-700 hover:border-teal-200 hover:bg-white`}>
                  Manage portal <Layers3 size={16} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-teal-700" /> Citizen-focused</span>
                <span className="inline-flex items-center gap-2"><HeartHandshake size={16} className="text-teal-700" /> Public service</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-3 rounded-[2rem] bg-white/40 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/75 p-4 shadow-xl shadow-slate-900/10 backdrop-blur sm:p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 flex min-h-40 flex-col justify-between rounded-2xl bg-gradient-to-br from-teal-800 to-teal-600 p-5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg bg-white/15 p-2"><Landmark size={22} /></span>
                      <span className="text-xs font-medium text-teal-100">PUBLIC SERVICES</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Your state. Your services.</p>
                      <p className="mt-1 text-sm text-teal-100">One place to get started.</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-4">
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700"><Folder size={20} /></span>
                    <p className="text-2xl font-extrabold text-slate-900">{categories.length}</p>
                    <p className="mt-1 text-xs text-slate-500">Service categories</p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-4">
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-700"><Settings size={20} /></span>
                    <p className="text-2xl font-extrabold text-slate-900">{services.length}</p>
                    <p className="mt-1 text-xs text-slate-500">Listed services</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50 p-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-800"><TriangleAlert size={18} /></span>
                  <div><p className="text-sm font-semibold text-slate-800">Local issues need local action</p><p className="mt-0.5 text-xs leading-5 text-slate-600">Roads, water, sanitation and public facilities.</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1.5 bg-gradient-to-r from-orange-400 via-white to-emerald-600" />
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-9 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Portal administration</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">Manage categories, departments & services</h2>
              <p className="mt-1 text-sm text-slate-500">Add records below. Your data is saved in this browser using local storage.</p>
            </div>
            {editing.type && <button onClick={cancelEdit} className="text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900">Cancel editing</button>}
          </div>

          {notice && <div role="status" className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"><CheckCircle2 size={17} />{notice}</div>}

          <div className="grid gap-4 xl:grid-cols-3">
            <div id="categories">
              <div id="category-form">
                <FormCard tone="blue" icon={Folder} title={editing.type === "category" ? "Edit Category" : "Add Category"} description="Create a category for related services" buttonText={editing.type === "category" ? "Update Category" : "Add Category"} editing={editing.type === "category"} onSubmit={submitCategory}>
                  <Field label="Category Name"><input className={inputClass} placeholder="e.g. Citizen Services" value={categoryForm.name} onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })} required /></Field>
                  <Field label="Category Status"><select className={inputClass} value={categoryForm.status} onChange={(e) => setCategoryForm({ ...categoryForm, status: e.target.value })}><option>Active</option><option>Inactive</option></select></Field>
                </FormCard>
              </div>
            </div>

            <div id="departments">
              <div id="department-form">
                <FormCard tone="green" icon={Building2} title={editing.type === "department" ? "Edit Department" : "Add Department"} description="Link a department to a category" buttonText={editing.type === "department" ? "Update Department" : "Add Department"} editing={editing.type === "department"} onSubmit={submitDepartment}>
                  <Field label="Department Name"><input className={inputClass} placeholder="e.g. Revenue Department" value={departmentForm.name} onChange={(e) => setDepartmentForm({ ...departmentForm, name: e.target.value })} required /></Field>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Select Category"><select className={inputClass} value={departmentForm.categoryId} onChange={(e) => setDepartmentForm({ ...departmentForm, categoryId: e.target.value })} required><option value="">Choose category</option>{categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></Field>
                    <Field label="Department Status"><select className={inputClass} value={departmentForm.status} onChange={(e) => setDepartmentForm({ ...departmentForm, status: e.target.value })}><option>Active</option><option>Inactive</option></select></Field>
                  </div>
                </FormCard>
              </div>
            </div>

            <div id="service-form">
              <FormCard tone="purple" icon={Settings} title={editing.type === "service" ? "Edit Service" : "Add Service"} description="Add a service under a department" buttonText={editing.type === "service" ? "Update Service" : "Add Service"} editing={editing.type === "service"} onSubmit={submitService}>
                <Field label="Service Name"><input className={inputClass} placeholder="e.g. Community Certificate" value={serviceForm.name} onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })} required /></Field>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Select Department"><select className={inputClass} value={serviceForm.departmentId} onChange={(e) => setServiceForm({ ...serviceForm, departmentId: e.target.value })} required><option value="">Choose department</option>{departments.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></Field>
                  <Field label="Service Status"><select className={inputClass} value={serviceForm.status} onChange={(e) => setServiceForm({ ...serviceForm, status: e.target.value })}><option>Active</option><option>Inactive</option></select></Field>
                </div>
              </FormCard>
            </div>
          </div>

          <div className="mt-7 grid gap-5">
            <DataTable title="Category List" icon={Folder} tone="blue" emptyText="No categories yet. Add one using the form above." rows={categories} columns={[
              { key: "name", label: "Category Name" },
              { key: "status", label: "Status", render: (row) => <StatusBadge status={row.status} /> },
            ]} onEdit={(row, finish) => editRow("category", row, finish)} onDelete={(row) => deleteRow("category", row)} />

            <DataTable title="Department List" icon={Building2} tone="green" emptyText="No departments yet. Add a department using the form above." rows={departments} columns={[
              { key: "name", label: "Department Name" },
              { key: "categoryId", label: "Category", render: (row) => <span>{categoryName(row.categoryId)}</span> },
              { key: "status", label: "Status", render: (row) => <StatusBadge status={row.status} /> },
            ]} onEdit={(row, finish) => editRow("department", row, finish)} onDelete={(row) => deleteRow("department", row)} />

            <div id="services">
              <DataTable title="Service List" icon={Settings} tone="purple" emptyText="No services yet. Add a service using the form above." rows={services} columns={[
                { key: "name", label: "Service Name" },
                { key: "departmentId", label: "Department", render: (row) => <span>{departmentName(row.departmentId)}</span> },
                { key: "status", label: "Status", render: (row) => <StatusBadge status={row.status} /> },
              ]} onEdit={(row, finish) => editRow("service", row, finish)} onDelete={(row) => deleteRow("service", row)} />
            </div>
          </div>
        </section>

        <section id="issues" className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700"><TriangleAlert size={23} /></span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Issues affecting your community?</h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">Common civic concerns include damaged roads, water supply, waste collection, street lighting and public facilities. Use the appropriate official department channel to report an issue.</p>
              </div>
            </div>
            <a href="#departments" className={`${buttonClass} shrink-0 border border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-800`}>Find a department <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Tamil Nadu Government Services Portal — Demo UI</span>
          <span className="text-slate-400">React · Vite · Tailwind CSS · Local Storage</span>
        </div>
      </footer>
    </div>
  );
}
