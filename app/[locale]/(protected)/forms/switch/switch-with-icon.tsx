import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Ban, Bell, Check, Lock, LockOpen, Moon, PhoneIncoming, PhoneMissed, Sun, Volume2, VolumeX, X } from "lucide-react";

const SwitchWithIcon = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          id="badge_icon1"
      
        />
        <Label htmlFor="badge_icon1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="primary"
          id="badge_icon2"
      
        />
        <Label htmlFor="badge_icon2">Primary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="secondary"
          id="badge_icon3"
      
        />
        <Label htmlFor="badge_icon3">Secondary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="info"
          id="badge_icon4"
      
        />
        <Label htmlFor="badge_icon4">Info</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="warning"
          id="badge_icon5"
      
        />
        <Label htmlFor="badge_icon5">Warning</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="success"
          id="badge_icon6"
      
        />
        <Label htmlFor="badge_icon6">Success</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="destructive"
          id="badge_icon7"
      
        />
        <Label htmlFor="badge_icon7">Destructive</Label>
      </div>
    </div>
  );
};

export default SwitchWithIcon;