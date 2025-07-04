import React, { useState } from 'react';
import { useContent, ActivityData, PillarData, ImpactMetric, HeroContent, SectionContent } from './ContentContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Trash2, Plus, Save, RotateCcw, Eye } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface CMSPageProps {
  onPreview: () => void;
}

export default function CMSPage({ onPreview }: CMSPageProps) {
  const { content, updateContent, resetContent } = useContent();
  const [activeTab, setActiveTab] = useState('hero');

  const handleSave = () => {
    // In a real application, this would save to a backend
    toast.success('Content saved successfully!');
  };

  const handleReset = () => {
    resetContent();
    toast.success('Content reset to default values!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Content Management System</h1>
              <p className="text-gray-600">Manage your sustainability landing page content</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
              <Button variant="outline" onClick={onPreview} className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button onClick={handleSave} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="sections">Page Sections</TabsTrigger>
            <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
            <TabsTrigger value="pillars">Pillars</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Hero Section Tab */}
          <TabsContent value="hero">
            <HeroEditor content={content.hero} onChange={(hero) => updateContent({ hero })} />
          </TabsContent>

          {/* Page Sections Tab */}
          <TabsContent value="sections">
            <SectionsEditor content={content.sections} onChange={(sections) => updateContent({ sections })} />
          </TabsContent>

          {/* Impact Metrics Tab */}
          <TabsContent value="impact">
            <ImpactMetricsEditor content={content.impactMetrics} onChange={(impactMetrics) => updateContent({ impactMetrics })} />
          </TabsContent>

          {/* Pillars Tab */}
          <TabsContent value="pillars">
            <PillarsEditor content={content.pillars} onChange={(pillars) => updateContent({ pillars })} />
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <ActivitiesEditor content={content.activities} onChange={(activities) => updateContent({ activities })} />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <SettingsEditor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Hero Editor Component
function HeroEditor({ content, onChange }: { content: HeroContent; onChange: (content: HeroContent) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section Content</CardTitle>
        <CardDescription>Edit the main hero section content displayed at the top of the page</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="hero-title">Main Title</Label>
          <Input
            id="hero-title"
            value={content.title}
            onChange={(e) => onChange({ ...content, title: e.target.value })}
            placeholder="Enter hero title"
          />
        </div>
        <div>
          <Label htmlFor="hero-subtitle">Subtitle</Label>
          <Textarea
            id="hero-subtitle"
            value={content.subtitle}
            onChange={(e) => onChange({ ...content, subtitle: e.target.value })}
            placeholder="Enter hero subtitle"
            rows={3}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="primary-button">Primary Button Text</Label>
            <Input
              id="primary-button"
              value={content.primaryButtonText}
              onChange={(e) => onChange({ ...content, primaryButtonText: e.target.value })}
              placeholder="Primary button text"
            />
          </div>
          <div>
            <Label htmlFor="secondary-button">Secondary Button Text</Label>
            <Input
              id="secondary-button"
              value={content.secondaryButtonText}
              onChange={(e) => onChange({ ...content, secondaryButtonText: e.target.value })}
              placeholder="Secondary button text"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Sections Editor Component
function SectionsEditor({ content, onChange }: { content: SectionContent[]; onChange: (content: SectionContent[]) => void }) {
  const updateSection = (index: number, updates: Partial<SectionContent>) => {
    const newSections = [...content];
    newSections[index] = { ...newSections[index], ...updates };
    onChange(newSections);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Page Sections</h3>
          <p className="text-gray-600">Edit section titles and descriptions</p>
        </div>
      </div>

      <div className="grid gap-6">
        {content.map((section, index) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="text-base">{section.id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor={`section-title-${index}`}>Section Title</Label>
                <Input
                  id={`section-title-${index}`}
                  value={section.title}
                  onChange={(e) => updateSection(index, { title: e.target.value })}
                  placeholder="Section title"
                />
              </div>
              <div>
                <Label htmlFor={`section-subtitle-${index}`}>Section Subtitle</Label>
                <Textarea
                  id={`section-subtitle-${index}`}
                  value={section.subtitle}
                  onChange={(e) => updateSection(index, { subtitle: e.target.value })}
                  placeholder="Section subtitle"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Impact Metrics Editor Component
function ImpactMetricsEditor({ content, onChange }: { content: ImpactMetric[]; onChange: (content: ImpactMetric[]) => void }) {
  const updateMetric = (index: number, updates: Partial<ImpactMetric>) => {
    const newMetrics = [...content];
    newMetrics[index] = { ...newMetrics[index], ...updates };
    onChange(newMetrics);
  };

  const addMetric = () => {
    const newMetric: ImpactMetric = {
      id: `metric-${Date.now()}`,
      value: "0",
      unit: "units",
      label: "New Metric",
      description: "Description of the new metric",
      progress: 50,
      target: "Target description",
      colorVariant: "chart-1"
    };
    onChange([...content, newMetric]);
  };

  const removeMetric = (index: number) => {
    const newMetrics = content.filter((_, i) => i !== index);
    onChange(newMetrics);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Impact Metrics</h3>
          <p className="text-gray-600">Manage environmental impact metrics displayed on the page</p>
        </div>
        <Button onClick={addMetric} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Metric
        </Button>
      </div>

      <div className="grid gap-6">
        {content.map((metric, index) => (
          <Card key={metric.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{metric.label}</CardTitle>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeMetric(index)}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`metric-value-${index}`}>Value</Label>
                  <Input
                    id={`metric-value-${index}`}
                    value={metric.value}
                    onChange={(e) => updateMetric(index, { value: e.target.value })}
                    placeholder="Metric value"
                  />
                </div>
                <div>
                  <Label htmlFor={`metric-unit-${index}`}>Unit</Label>
                  <Input
                    id={`metric-unit-${index}`}
                    value={metric.unit}
                    onChange={(e) => updateMetric(index, { unit: e.target.value })}
                    placeholder="Unit (e.g., tons CO₂)"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor={`metric-label-${index}`}>Label</Label>
                <Input
                  id={`metric-label-${index}`}
                  value={metric.label}
                  onChange={(e) => updateMetric(index, { label: e.target.value })}
                  placeholder="Metric label"
                />
              </div>
              <div>
                <Label htmlFor={`metric-description-${index}`}>Description</Label>
                <Textarea
                  id={`metric-description-${index}`}
                  value={metric.description}
                  onChange={(e) => updateMetric(index, { description: e.target.value })}
                  placeholder="Metric description"
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor={`metric-progress-${index}`}>Progress (%)</Label>
                  <Input
                    id={`metric-progress-${index}`}
                    type="number"
                    min="0"
                    max="100"
                    value={metric.progress}
                    onChange={(e) => updateMetric(index, { progress: parseInt(e.target.value) || 0 })}
                    placeholder="Progress percentage"
                  />
                </div>
                <div>
                  <Label htmlFor={`metric-target-${index}`}>Target</Label>
                  <Input
                    id={`metric-target-${index}`}
                    value={metric.target}
                    onChange={(e) => updateMetric(index, { target: e.target.value })}
                    placeholder="Target description"
                  />
                </div>
                <div>
                  <Label htmlFor={`metric-color-${index}`}>Color Variant</Label>
                  <Select
                    value={metric.colorVariant}
                    onValueChange={(value) => updateMetric(index, { colorVariant: value as any })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chart-1">Chart 1 (Primary)</SelectItem>
                      <SelectItem value="chart-2">Chart 2 (Secondary)</SelectItem>
                      <SelectItem value="chart-3">Chart 3 (Accent)</SelectItem>
                      <SelectItem value="chart-4">Chart 4 (Warning)</SelectItem>
                      <SelectItem value="chart-5">Chart 5 (Success)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Pillars Editor Component
function PillarsEditor({ content, onChange }: { content: PillarData[]; onChange: (content: PillarData[]) => void }) {
  const updatePillar = (index: number, updates: Partial<PillarData>) => {
    const newPillars = [...content];
    newPillars[index] = { ...newPillars[index], ...updates };
    onChange(newPillars);
  };

  const addPillar = () => {
    const newPillar: PillarData = {
      id: `pillar-${Date.now()}`,
      title: "New Pillar",
      description: "Description of the new pillar",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&h=600&fit=crop",
      fullDescription: "Detailed description of the pillar",
      objectives: ["Objective 1", "Objective 2"],
      achievements: ["Achievement 1", "Achievement 2"],
      metrics: [
        { label: "Metric 1", value: "50%", description: "Description" }
      ],
      colorVariant: "chart-1"
    };
    onChange([...content, newPillar]);
  };

  const removePillar = (index: number) => {
    const newPillars = content.filter((_, i) => i !== index);
    onChange(newPillars);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Sustainability Pillars</h3>
          <p className="text-gray-600">Manage the sustainability pillars and their detailed content</p>
        </div>
        <Button onClick={addPillar} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Pillar
        </Button>
      </div>

      <div className="grid gap-6">
        {content.map((pillar, index) => (
          <Card key={pillar.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{pillar.title}</CardTitle>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removePillar(index)}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor={`pillar-title-${index}`}>Title</Label>
                <Input
                  id={`pillar-title-${index}`}
                  value={pillar.title}
                  onChange={(e) => updatePillar(index, { title: e.target.value })}
                  placeholder="Pillar title"
                />
              </div>
              <div>
                <Label htmlFor={`pillar-description-${index}`}>Short Description</Label>
                <Textarea
                  id={`pillar-description-${index}`}
                  value={pillar.description}
                  onChange={(e) => updatePillar(index, { description: e.target.value })}
                  placeholder="Short description"
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor={`pillar-full-description-${index}`}>Full Description</Label>
                <Textarea
                  id={`pillar-full-description-${index}`}
                  value={pillar.fullDescription}
                  onChange={(e) => updatePillar(index, { fullDescription: e.target.value })}
                  placeholder="Detailed description"
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor={`pillar-image-${index}`}>Image URL</Label>
                <Input
                  id={`pillar-image-${index}`}
                  value={pillar.image}
                  onChange={(e) => updatePillar(index, { image: e.target.value })}
                  placeholder="Image URL"
                />
              </div>
              <div>
                <Label htmlFor={`pillar-color-${index}`}>Color Variant</Label>
                <Select
                  value={pillar.colorVariant}
                  onValueChange={(value) => updatePillar(index, { colorVariant: value as any })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chart-1">Chart 1</SelectItem>
                    <SelectItem value="chart-2">Chart 2</SelectItem>
                    <SelectItem value="chart-3">Chart 3</SelectItem>
                    <SelectItem value="chart-4">Chart 4</SelectItem>
                    <SelectItem value="chart-5">Chart 5</SelectItem>
                    <SelectItem value="custom-purple">Custom Purple</SelectItem>
                    <SelectItem value="custom-green">Custom Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Activities Editor Component
function ActivitiesEditor({ content, onChange }: { content: ActivityData[]; onChange: (content: ActivityData[]) => void }) {
  const updateActivity = (index: number, updates: Partial<ActivityData>) => {
    const newActivities = [...content];
    newActivities[index] = { ...newActivities[index], ...updates };
    onChange(newActivities);
  };

  const addActivity = () => {
    const newActivity: ActivityData = {
      id: `activity-${Date.now()}`,
      title: "New Activity",
      subtitle: "Activity subtitle",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
      fullDescription: "Detailed description of the activity",
      location: "Location",
      duration: "Duration",
      impactMetrics: [
        {
          label: "Metric 1",
          value: "100",
          unit: "units",
          description: "Description of metric"
        }
      ]
    };
    onChange([...content, newActivity]);
  };

  const removeActivity = (index: number) => {
    const newActivities = content.filter((_, i) => i !== index);
    onChange(newActivities);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Activities & Stories</h3>
          <p className="text-gray-600">Manage sustainability activities and their impact stories</p>
        </div>
        <Button onClick={addActivity} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Activity
        </Button>
      </div>

      <div className="grid gap-6">
        {content.map((activity, index) => (
          <Card key={activity.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{activity.title}</CardTitle>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeActivity(index)}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor={`activity-title-${index}`}>Title</Label>
                <Input
                  id={`activity-title-${index}`}
                  value={activity.title}
                  onChange={(e) => updateActivity(index, { title: e.target.value })}
                  placeholder="Activity title"
                />
              </div>
              <div>
                <Label htmlFor={`activity-subtitle-${index}`}>Subtitle</Label>
                <Input
                  id={`activity-subtitle-${index}`}
                  value={activity.subtitle}
                  onChange={(e) => updateActivity(index, { subtitle: e.target.value })}
                  placeholder="Activity subtitle"
                />
              </div>
              <div>
                <Label htmlFor={`activity-description-${index}`}>Full Description</Label>
                <Textarea
                  id={`activity-description-${index}`}
                  value={activity.fullDescription}
                  onChange={(e) => updateActivity(index, { fullDescription: e.target.value })}
                  placeholder="Detailed description"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor={`activity-location-${index}`}>Location</Label>
                  <Input
                    id={`activity-location-${index}`}
                    value={activity.location}
                    onChange={(e) => updateActivity(index, { location: e.target.value })}
                    placeholder="Location"
                  />
                </div>
                <div>
                  <Label htmlFor={`activity-duration-${index}`}>Duration</Label>
                  <Input
                    id={`activity-duration-${index}`}
                    value={activity.duration}
                    onChange={(e) => updateActivity(index, { duration: e.target.value })}
                    placeholder="Duration"
                  />
                </div>
                <div>
                  <Label htmlFor={`activity-image-${index}`}>Image URL</Label>
                  <Input
                    id={`activity-image-${index}`}
                    value={activity.image}
                    onChange={(e) => updateActivity(index, { image: e.target.value })}
                    placeholder="Image URL"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Settings Editor Component
function SettingsEditor() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Settings</CardTitle>
          <CardDescription>Global settings for the content management system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="auto-save">Auto-save Interval</Label>
              <Select defaultValue="5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 minute</SelectItem>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="0">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="backup-frequency">Backup Frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="notifications" defaultChecked />
            <Label htmlFor="notifications">Enable email notifications for content changes</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Export & Import</CardTitle>
          <CardDescription>Backup or restore your content configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button variant="outline">Export Content</Button>
            <Button variant="outline">Import Content</Button>
          </div>
          <p className="text-sm text-gray-600">
            Export your current content configuration as a JSON file, or import a previously saved configuration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}