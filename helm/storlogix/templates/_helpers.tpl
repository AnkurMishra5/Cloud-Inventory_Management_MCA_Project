{{/*
Expand the name of the chart.
*/}}
{{- define "cloud-inventory-management.name" -}}
{{- .Chart.Name | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "cloud-inventory-management.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "cloud-inventory-management.labels" -}}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
{{ include "cloud-inventory-management.selectorLabels" . }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "cloud-inventory-management.selectorLabels" -}}
app.kubernetes.io/name: {{ include "cloud-inventory-management.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
