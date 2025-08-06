import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const SwitchWithBadge = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          id="badge1"
        />
        <Label htmlFor="badge1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="primary"
          id="badge2"
        />
        <Label htmlFor="badge2">Primary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="secondary"
          id="badge3"
        />
        <Label htmlFor="badge3">Secondary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="info"
          id="badge4"
        />
        <Label htmlFor="badge4">Info</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="warning"
          id="badge5"
        />
        <Label htmlFor="badge5">Warning</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="success"
          id="badge6"
        />
        <Label htmlFor="badge6">Success</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="destructive"
          id="badge7"
        />
        <Label htmlFor="badge7">Destructive</Label>
      </div>
    </div>
  );
};

export default SwitchWithBadge;